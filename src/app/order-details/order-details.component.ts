import {Component, OnInit} from '@angular/core';

import {Router, ActivatedRoute} from '@angular/router';

import {AlertService} from '../_services/alert.service';
import {AuthenticationService} from '../_services/authentication.service';
import {UserService} from '../_services/user.service';
import {OrderService} from '../_services/orders.service';

import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  model: any = {amount:1};
  loading = false;

  id: number;
  private route_sub: any;
  private http_sub: any;
  order = {meals: []};
  invited_users = [];
  joined_users = [];
  addPermession = false;
  totals = {price: 0, quantity: 0};

  constructor(private _route: ActivatedRoute,
              private _order: OrderService,
              private _auth: AuthenticationService,
              private _modal: NgbModal) {
  }

  ngOnInit() {
    this.route_sub = this._route.params.subscribe(params => {
      this.id = params['id'];
      this.http_sub = this.pollData(this.id).subscribe(
        data => {
          this.setData(data)
        },
        error => {
        });
    });
    this.model.owner = this._auth.getCurrentUser()._id;
  }

  setData(data) {
    this.order = data;

    this.joined_users = [];
    this.totals.quantity = 0;
    this.totals.price = 0;

    for (let i = 0; i < data.meals.length; i++) {
      this.joined_users.push(data.meals[i].owner._id);
      this.totals.quantity += data.meals[i].amount;
      this.totals.price += data.meals[i].price;
    }

    for (let i = 0; i < data.invited.length; i++) {
      if (data.invited.indexOf(this._auth.getCurrentUser()._id) != -1) {
        console.log("invited")
        this.addPermession = true;
      }
      if (this._auth.getCurrentUser()._id == data.owner._id) {
        console.log("owner")
        this.addPermession = true;
      }
      if (this.joined_users.indexOf(data.invited[i]._id) != -1) {
        data.invited[i].badge = {text: "Joined", "class": "badge-success", icon: "check"};
      } else {
        data.invited[i].badge = {text: "Waiting", "class": "badge-default", icon: "refresh"};
      }
    }

    this.invited_users = data.invited;
  };

  pollData(id): Observable<any> {
    //Creating a subject
    var pollSubject = new Subject<any>();

    //Define the Function which subscribes our pollSubject to a new http.get observable (see _pollLiveData() below)
    var subscribeToNewRequestObservable = () => {
      this._order.getById(id)
        .subscribe(
          (res) => {
            pollSubject.next(res)
          }
        );
    };

    //Subscribe our "subscription-function" to custom subject (observable) with 4000ms of delay added
    pollSubject.delay(5000).subscribe(subscribeToNewRequestObservable);

    //Call the "subscription-function" to execute the first request
    subscribeToNewRequestObservable();

    //Return observable of our subject
    return pollSubject.asObservable();
  }

  addMeal() {
    this.loading = true;
    this._order.addMeal(this.id, this.model)
      .subscribe(
        data => {
          this.loading = false;
          this.order.meals.push({
            name: this.model.name,
            amount: this.model.amount,
            price: this.model.price,
            comment: this.model.comment,
            owner: this._auth.getCurrentUser()
          });
          this.totals.quantity += this.model.amount;
          this.totals.price += this.model.price;
          this.model = {owner: this._auth.getCurrentUser()._id}
        },
        error => {
          this.loading = false;
        });
  }

  removeMeal(id) {
    this._order.removeMeal(this.id, id).subscribe(
      data => {
        for (let i = 0; i < this.order.meals.length; i++) {
          if (this.order.meals[i]._id == id) {
            this.order.meals.splice(i, 1);
            this.totals.quantity -= this.order.meals[i].amount;
            this.totals.price -= this.order.meals[i].price;
          }
        }
      },
      error => {
      });
  }

  removeUser(id) {
    this._order.removeUser(this.id, id).subscribe(
      data => {
        for (let i = 0; i < this.invited_users.length; i++) {
          if (this.invited_users[i]._id == id) {
            this.invited_users.splice(i, 1);
          }
        }
        let j = this.order.meals.length;
        while (j--){
          if (this.order.meals[j].owner._id == id) {
            this.totals.quantity -= this.order.meals[j].amount;
            this.totals.price -= this.order.meals[j].price;
            this.order.meals.splice(j, 1);
          }
        }
      },
      error => {
      });
  }

  viewMenu(content) {
    this._modal.open(content);
  }

  ngOnDestroy() {
    if (this.route_sub) {
      this.route_sub.unsubscribe();
    }
    if (this.http_sub) {
      this.http_sub.unsubscribe();
    }
  }

}

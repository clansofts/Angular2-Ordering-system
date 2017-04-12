import {Component, OnInit} from '@angular/core';

import {Router, ActivatedRoute} from '@angular/router';

import {AlertService} from '../_services/alert.service';
import {AuthenticationService} from '../_services/authentication.service';
import {UserService} from '../_services/user.service';
import {OrderService} from '../_services/orders.service';

import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject';


@Component({
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  model: any = {};
  loading = false;

  id: number;
  private route_sub: any;
  private http_sub: any;
  order = {meals: []};
  invited_users = [];
  joined_users = [];

  constructor(private _route: ActivatedRoute,
              private _order: OrderService,
              private _auth: AuthenticationService,) {
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
    console.log(data);

    for (let i = 0; i < data.invited.length; i++) {
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
    pollSubject.delay(4000).subscribe(subscribeToNewRequestObservable);

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
          this.model = {owner : this._auth.getCurrentUser()._id}
        },
        error => {
          this.loading = false;
        });
  }

  removeMeal(id){
    this._order.removeMeal(this.id,id).subscribe(
      data => {
        for (let i = 0; i < this.order.meals.length; i++) {
          if (this.order.meals[i]._id == id) {
            this.order.meals.splice(i, 1);
          }
        }
        console.log(data)
      },
      error => {
      });

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

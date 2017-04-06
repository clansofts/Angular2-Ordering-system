import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {AlertService} from '../_services/alert.service';
import {AuthenticationService} from '../_services/authentication.service';
import {UserService} from '../_services/user.service';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})

export class AddOrderComponent implements OnInit {
  model: any = {};

  loading = false;
  searching = false;
  searchFailed = false;

  tmp: any = {invite: {}, invite_valid: true};
  invited_users = [];

  order_for_values = ["Lunch", "BreackFast"];

  constructor(private _user: UserService) {
  }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(300)
      .distinctUntilChanged()
      .do(() => this.searching = true)
      .switchMap(term =>
        this._user.search({field: "name", q: term})
          .do(() => this.searchFailed = false)
          .catch(() => {
            this.searchFailed = true;
            return Observable.of([]);
          }))
      .do(() => this.searching = false);

  formatter = (x: {name: string}) => x.name;

  inviteItemTmp(event) {
    this.tmp.invite = event.item;
  }

  inviteItemHandle() {
    var exists = false;
    for (var i = 0; i < this.invited_users.length; i++) {
      if (this.invited_users[i]._id == this.tmp.invite._id) {
        exists = true;
      }
    }
    if (exists) {
      this.tmp.invite_valid = false;
    } else {
      this.invited_users.push(this.tmp.invite);
    }
  }

  removeUser(user){
    for (var i = 0; i < this.invited_users.length; i++) {
      if (this.invited_users[i]._id == user._id) {
        this.invited_users.splice(i, 1);
      }
    }
  }

  ngOnInit() {
  }

  addOrder() {

  }

}

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

  tmp: any = {invite : {}};
  invited_users = [];

  order_for_values = ["Lunch", "BreackFast"];

  constructor(private _user : UserService) {
  }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(300)
      .distinctUntilChanged()
      .do(() => this.searching = true)
      .switchMap(term =>
        this._user.search({field : "name",q : term})
          .do(() => this.searchFailed = false)
          .catch(() => {
            this.searchFailed = true;
            return Observable.of([]);
          }))
      .do(() => this.searching = false);

  formatter = (x: {name: string}) => x.name;

  inviteItemTmp(event){
    this.tmp.invite = event.item;
  }

  inviteItemHandle(){
    this.invited_users.push(this.tmp.invite);
  }

  ngOnInit() {
  }

  addOrder() {

  }

}

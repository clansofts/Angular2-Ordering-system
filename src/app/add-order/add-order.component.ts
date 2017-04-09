import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {AlertService} from '../_services/alert.service';
import {AuthenticationService} from '../_services/authentication.service';
import {UserService} from '../_services/user.service';
import {OrderService} from '../_services/orders.service';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import {FriendsService} from "../_services/friends.service";

import {FileUploader} from 'ng2-file-upload/ng2-file-upload';
const UPLOAD_URL = 'http://localhost:8090/upload/photo';

@Component({
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})

export class AddOrderComponent implements OnInit {
  model: any = {invited:[]};
  loading = false;
  searching = false;
  searchFailed = false;
  tmp: any = {
    invite: {}, invite_valid: true
  };
  invited_users = [];
  order_for_values = ["Lunch", "BreackFast"];
  invite_by_values = ["Friends", "Groups"];
  invite_by;
  menu_photo: any = {valid: true, error: ""};

  public uploader: FileUploader = new FileUploader({url: UPLOAD_URL, itemAlias: 'photo'});

  constructor(private _router: Router,
              private _auth: AuthenticationService,
              private _user: UserService,
              private _alert: AlertService,
              private _friend: FriendsService,
              private _order: OrderService) {
  }

  ngOnInit() {
    this.model.owner = this._auth.getCurrentUser()._id;
    this.invite_by = this.invite_by_values[0];

    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
      let jsonResponse = JSON.parse(response);
      if (jsonResponse.error) {
        this.menu_photo.valid = false;
        this.menu_photo.error = jsonResponse.error;
      }else if (jsonResponse.file){
        this.menu_photo.valid = true;
        this.model.photo = jsonResponse.file;
      }
    };
  }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(300)
      .distinctUntilChanged()
      .do(() => this.searching = true)
      .switchMap(term =>
        this._friend.search({user_id : this._auth.getCurrentUser()._id,field: "name", q: term})
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
    let exists = false;
    for (let i = 0; i < this.invited_users.length; i++) {
      if (this.invited_users[i]._id == this.tmp.invite._id) {
        exists = true;
      }
    }
    if (exists) {
      this.tmp.invite_valid = false;
    } else {
      if (Object.keys(this.tmp.invite).length > 0) {
        this.invited_users.push(this.tmp.invite);
      }
    }
  }

  removeUser(user) {
    for (let i = 0; i < this.invited_users.length; i++) {
      if (this.invited_users[i]._id == user._id) {
        this.invited_users.splice(i, 1);
      }
    }
  }


  addOrder() {
    this.loading = true;

    for (let i = 0; i < this.invited_users.length; i++) {
      this.model.invited.push(this.invited_users[i]._id);
    }

    this._order.create(this.model)
      .subscribe(
        data => {
          this._alert.success('Published successful', true);
          this._router.navigate(['/order-details',data._id]);
        },
        error => {
          this._alert.error(error.json().error);
          this.loading = false;
      });
  }

}

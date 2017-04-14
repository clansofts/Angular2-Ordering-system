import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {User} from "../_models/user";
import {AlertService} from '../_services/alert.service';
import {AuthenticationService} from '../_services/authentication.service';
import {UserService} from '../_services/user.service';
import {OrderService} from '../_services/orders.service';
import {NotificationService} from "../_services/notification.service";//by seif
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import {FriendsService} from "../_services/friends.service";
import {GroupsService} from "../_services/groups.service";

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
  order_for_values = ["Lunch", "BreackFast","Dinner"];
  invite_by_values = ["Friends", "Groups"];
  invite_by;
  menu_photo: any = {valid: true, error: ""};
  myFollowers:any=[]

  public uploader: FileUploader = new FileUploader({url: UPLOAD_URL, itemAlias: 'photo'});

  constructor(private _router: Router,
              private _auth: AuthenticationService,
              private _user: UserService,
              private _alert: AlertService,
              private _friend: FriendsService,
              private _groups: GroupsService,
              private notiServe: NotificationService,
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
    //get my followers & send notification to them
    this._friend.getFollowers(this._auth.getCurrentUser()._id).then((followers)=>{this.myFollowers=followers;
                                                                                  console.log("my followers :",this.myFollowers);
                                                                                  var Ids = [];
                                                                                  this.myFollowers.forEach(function(follower){
                                                                                    Ids.push(follower._id)
                                                                                  })
                                                                                  this.notiServe.toMyFollowers({ids:Ids.join()});
                                                                                })
  }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(300)
      .distinctUntilChanged()
      .do(() => this.searching = true)
      .switchMap(term =>
        this._search({user_id : this._auth.getCurrentUser()._id,field: "name", q: term})
          .do(() => this.searchFailed = false)
          .catch(() => {
            this.searchFailed = true;
            return Observable.of([]);
          }))
      .do(() => this.searching = false);

  _search = function (data) {
    return (this.invite_by === "Friends") ? this._friend.search(data) : this._groups.search(data);
  };

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
      this.tmp.invite_valid = true;
      if (Object.keys(this.tmp.invite).length > 0) {
        if (this.invite_by === "Friends" && !this.tmp.invite.members) {
          this.invited_users.push(this.tmp.invite);
        }else if(this.invite_by === "Groups" && this.tmp.invite.members){
          for (let j = 0; j < this.tmp.invite.members.length; j++) {
            this.invited_users.push(this.tmp.invite.members[j]);
          }
        }}
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
          //by seif: push notification to others

          //
          this._alert.success('Published successful', true);
          this._router.navigate(['/order-details',data._id]);
        },
        error => {
          this._alert.error(error.json().error);
          this.loading = false;
      });
  }


}

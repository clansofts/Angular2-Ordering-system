import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {User} from "../_models/user";

// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {AuthenticationService} from "../_services/authentication.service";
import {FriendsService} from "../_services/friends.service";
import {UtilService} from "../_services/util.service";

@Component({
  selector: 'app-friend-search',
  templateUrl: './friend-search.component.html',
  styleUrls: ['./friend-search.component.css']
})
export class FriendSearchComponent implements OnInit {

  private query;
  user: User;
  following: boolean = false;
  blocked: boolean = false;
  deleteFriend: User;
  me: boolean = false;
  @Input() friends: User[];
  @Input() blockList: User[];
  @Output() notifyAdd: EventEmitter<User> = new EventEmitter<User>();
  @Output() notifyDelete: EventEmitter<User> = new EventEmitter<User>();
  @Output() notifyUnBlock: EventEmitter<User> = new EventEmitter<User>();

  constructor(private friendService: FriendsService,
              private authService: AuthenticationService,
              private  utilSerivse: UtilService) {
  }

  search(term: string): void {
    if (term != '') {
      if (term ==  this.authService.getCurrentUser().email)
      {
        this.user = this.authService.getCurrentUser();
        this.me = true;
        this.blocked = false;
        this.following = false;

      }else {
        this.friendService.search({field: "email", q: term, from: this.authService.getCurrentUser()._id})
          .subscribe(
            data => {
              this.user = data[0];
              if (typeof this.user != 'undefined' && this.utilSerivse.objectPropInArray(this.friends, '_id', this.user._id)) {
                this.following = true;
              } else if (typeof this.user != 'undefined' && this.utilSerivse.objectPropInArray(this.blockList, '_id', this.user._id)) {
                this.blocked = true;
                this.me = false;
              }
              else {
                this.blocked = false;
                this.following = false;
                this.me = false;
              }

            },
            error => {
              console.log(error)
            });
      }
    }
  }

  makeFreind(): void {
    this.query = {reqFrom: this.authService.getCurrentUser()._id, reqTo: this.user._id};
    this.friendService.makeFriendShip(this.query)
      .subscribe(
        data => {
          if (!data.error) {
            this.notifyAdd.emit(this.user);
            this.user = null;
          }
        },
        error => {
          console.log(error);
        });
  }

  deleteFollower(): void {
    let query = {reqFrom: this.authService.getCurrentUser()._id, reqTo: this.user._id};
    this.friendService.deleteFriend(query)
      .then((deleteFriend) => {
        this.deleteFriend = deleteFriend;
        this.notifyDelete.emit(this.user);
        this.user = null;
      });
  }

  unBlockFollower(): any {
    this.notifyUnBlock.emit(this.user);
    this.user = null;
  }

  ngOnInit() {
  }

}

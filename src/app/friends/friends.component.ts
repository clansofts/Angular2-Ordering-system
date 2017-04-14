import { Component, OnInit } from '@angular/core';
import {User} from "../_models/user";
import {FriendsService} from "../_services/friends.service";
import {AuthenticationService} from "../_services/authentication.service";
import {UtilService} from "../_services/util.service";
import {NotificationService} from "../_services/notification.service";

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friends: User[];
  user: User;
  deleteFriend: User;
  blockedFriend: User;
  followers:User[];
  blockList:User[];
  unBlockedFriend: User;
  constructor(
    private friendService: FriendsService,
    private  authService: AuthenticationService,
    private UtilService: UtilService,
    private notiServe: NotificationService
  ) { }


  getFriends(): void {
    this.friendService.getFriends(this.authService.getCurrentUser()._id).then(friends => this.friends = friends);
  }

  getFollowers(): void {
    this.friendService.getFollowers(this.authService.getCurrentUser()._id).then((followers) => {this.followers = followers;
    });
  }

  getBlocked(): void {
    this.friendService.getBlocked(this.authService.getCurrentUser()._id).then(blocked => {
      this.blockList = blocked;
    });
  }

  onAddNotify(user: User): void
  {
    this.friends.push(user);
  }

  onDeleteNotify(user: User): void
  {
    this.friends  = this.UtilService.removeItem(this.friends,user);
  }

  deleteFollower(user: User): any{
    this.friends = this.friends.filter(h => h !== user);
    let query = {reqFrom :this.authService.getCurrentUser()._id,reqTo:user._id};
    this.friendService.deleteFriend(query).then(deleteFriend => this.deleteFriend = deleteFriend);
  }

  blockFollower(user: User): any{
    this.followers = this.followers.filter(h => h !== user);
    let query = {reqFrom :this.authService.getCurrentUser()._id,reqTo:user._id};
    this.friendService.blockFriend(query).then((me) =>{
      this.user = me;
      this.blockList.push(user);
    });
  }


  unBlockFollower(user: User): any{
    this.blockList  = this.UtilService.removeItem(this.blockList,user);
    if (this.UtilService.objectPropInArray(this.followers,'_id',user._id))
    {
      this.followers.push(user);
    }
    let query = {reqFrom :this.authService.getCurrentUser()._id,reqTo:user._id};
    this.friendService.unBlockFriend(query).then(me => console.log( me));
  }


  ngOnInit() {
    this.notiServe.getFollower().subscribe((user: User) => {
      this.followers.push(user);
    });
    this.getFriends();
    this.getFollowers();
    this.getBlocked();
  }
}

import { Component, OnInit } from '@angular/core';
import {User} from "../_models/user";
import {FriendsService} from "../_services/friends.service";
import {AuthenticationService} from "../_services/authentication.service";
import {UtilService} from "../_services/util.service";

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friends: User[];
  user: User;
  deleteFriend: User;
  followers:User[];
  constructor(
    private friendService: FriendsService,
    private  authService: AuthenticationService,
    private UtilService: UtilService
  ) { }


  getFriends(): void {
    this.friendService.getFriends(this.authService.getCurrentUser()._id).then(friends => this.friends = friends);
  }

  getFollowers(): void {
    this.friendService.getFollowers(this.authService.getCurrentUser()._id).then(followers => this.followers = followers);
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


  ngOnInit() {
    this.getFriends();
    this.getFollowers()
  }



}

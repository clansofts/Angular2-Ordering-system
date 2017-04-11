import { Component, OnInit } from '@angular/core';
import {HomeService} from "../_services/home.service";
import { User } from '../_models/user';
import {UtilService} from "../_services/util.service";
import { Order } from '../_models/order';
import {UserService} from '../_services/user.service';
import { AuthenticationService } from '../_services/authentication.service';
import {FriendsService} from "../_services/friends.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[HomeService]
})
export class HomeComponent implements OnInit {

  currentUser: User;
  friends:User[]=[];
  friendsIds:string[];
  myOrders:Order[];
  friendsOrders:Order[];

  constructor(private homeService: HomeService,private uerService: AuthenticationService,private friendService: FriendsService) {
    this.currentUser=uerService.getCurrentUser();
   }

  ngOnInit() {
    //console.log(this.homeService.getMyOrders(this.currentUser._id));
    //get my orders
    if (this.currentUser) {
      this.homeService.getMyOrders(this.currentUser._id).then((orders) => {//console.log("result :",orders);
        this.myOrders = orders;
        console.log("my orders:", this.myOrders);
      });
      //get My friends
      this.friendService.getFriends(this.currentUser._id).then((friends) => {//console.log("friends result :",friends);
        this.friends = friends;
        console.log("my friends:", this.friends);
        var Ids = [];
        this.friends.forEach(function (friend) {
          console.log("=", friend._id);
          Ids.push(friend._id)
        });
        this.friendsIds = Ids;
        console.log("ids", this.friendsIds);
        //get my friends's orders

        this.homeService.getFriendsOrders(this.friendsIds).then((orders) => {
          console.log("friends result :", orders);
          this.friendsOrders = orders;
          console.log("my friendsOrders:", this.friendsOrders);
        });
      });

    }
  }
}

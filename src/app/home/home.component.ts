import {Component, DoCheck, OnChanges, OnInit} from '@angular/core';
import {HomeService} from "../_services/home.service";
import { User } from '../_models/user';
import {UtilService} from "../_services/util.service";
import { Order } from '../_models/order';
import {UserService} from '../_services/user.service';
import { AuthenticationService } from '../_services/authentication.service';
import {FriendsService} from "../_services/friends.service";
import {NotificationService} from "../_services/notification.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[HomeService]
})
export class HomeComponent implements OnInit, DoCheck{

  currentUser: User;
  friends:User[]=[];
  friendsIds:string[];
  myOrders:Order[];
  friendsOrders:Order[];
  islogged:boolean=false;

  constructor(private homeService: HomeService,private uerService: AuthenticationService,private friendService: FriendsService,private notify: NotificationService) {
    this.currentUser=uerService.getCurrentUser();
   }

  ngOnInit() {
    //console.log(this.homeService.getMyOrders(this.currentUser._id));
    //get my orders
    if (this.currentUser) {
      this.islogged=true
      this.homeService.getMyOrders(this.currentUser._id).then((orders) => {//console.log("result :",orders);
        this.myOrders = orders;
        console.log("my orders:", this.myOrders);
      });
      this.init()

    }
    this.notify.getNewOrders().subscribe(message =>
                            {
                              console.log("msg from notify ",message)
                              this.init();
                              console.log("relod done");
                            });

  }

  init(){
    if (this.uerService.getCurrentUser()._id) {
      //get My friends
      this.friendService.getFriends(this.uerService.getCurrentUser()._id).then((friends) => {
        this.friends = friends;
        var Ids = [];
        this.friends.forEach(function (friend) {
          Ids.push(friend._id)
        });
        this.friendsIds = Ids;
        //get my friends's orders

        this.homeService.getFriendsOrders(this.friendsIds).then((orders) => {
          //console.log("friends result :", orders);
          this.friendsOrders = orders;
        });
      });
    }
    else {
      this.friendsOrders = null;
    }
  }
  ngDoCheck(){
    if (!this.uerService.isLoggedIn())
    {
      this.islogged = false;
    }

  }
}

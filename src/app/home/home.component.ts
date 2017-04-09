import { Component, OnInit } from '@angular/core';
import {HomeService} from "../_services/home.service";
import { User } from '../_models/user';
import {UtilService} from "../_services/util.service";
import { Order } from '../_models/order';
import {UserService} from '../_services/user.service';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[HomeService]
})
export class HomeComponent implements OnInit {

  currentUser: User;
  friends:User[]=[];
  myOrders:Order[]=[];
  friendsOrders:Order[]=[];

  constructor(private homeService: HomeService,private uerService: AuthenticationService) {
    this.currentUser=uerService.getCurrentUser();
    console.log("user",this.currentUser);
   }

  ngOnInit() {
    // console.log(this.homeService.getMyOrders(this.currentUser._id));
    // this.homeService.getMyOrders(this.currentUser._id).then((orders)=>this.myOrders=orders)
  }

}

import { Component, OnInit } from '@angular/core';
import {HomeService} from "../_services/home.service";
import { User } from '../_models/user';
import {UtilService} from "../_services/util.service";
import { Order } from '../_models/order';
import {UserService} from '../_services/user.service';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers:[HomeService]
})
export class OrdersComponent implements OnInit {


    myOrders:Order[];
    
  constructor(private homeService: HomeService,private uerService: AuthenticationService) { }

  ngOnInit() {
    //get my orders
   this.homeService.getMyOrders(this.uerService.getCurrentUser()._id).then((orders)=>{//console.log("result :",orders);
                                                                       this.myOrders=orders;
                                                                       console.log("my orders:",this.myOrders);
                                                                       });
  }

}

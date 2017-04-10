import { Component, OnInit } from '@angular/core';

import {Router, ActivatedRoute} from '@angular/router';

import {AlertService} from '../_services/alert.service';
import {AuthenticationService} from '../_services/authentication.service';
import {UserService} from '../_services/user.service';
import {OrderService} from '../_services/orders.service';


@Component({
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];

    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

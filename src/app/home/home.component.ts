import { Component, OnInit } from '@angular/core';
import {HomeService} from "./_services/home.service";
import { User } from '../_models/user';
import {UtilService} from "../_services/util.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[HomeService]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

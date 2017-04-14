import {Component, OnChanges, OnInit} from '@angular/core';
import {AuthenticationService} from "./_services/authentication.service";
import {Location} from "@angular/common";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, On{
  title = 'app works!';

  constructor(
      private location: Location,
      private _auth: AuthenticationService,
    ) {}


  ngOnInit() {
    console.log(this.location.path());
  }

  ngOnChanges(){
    console.log(this.location.path());
  }





}

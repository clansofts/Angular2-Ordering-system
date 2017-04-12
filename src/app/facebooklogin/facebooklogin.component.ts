import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../_services/alert.service';
import { AuthenticationService } from '../_services/authentication.service';
import {NotificationService} from "../_services/notification.service";


declare const FB:any;

@Component({
  selector: 'app-facebooklogin',
  templateUrl: './facebooklogin.component.html',
  styleUrls: ['./facebooklogin.component.css']
})
export class FacebookloginComponent implements OnInit {

  constructor() { 

  	FB.init({
            appId      : '273911746390586',
            cookie     : false,  // enable cookies to allow the server to access
                                // the session
            xfbml      : true,  // parse social plugins on this page
            version    : 'v2.5' // use graph api version 2.5
        });

  }

  onFacebookLoginClick() {
        FB.login();
    }

  statusChangeCallback(resp) {
        if (resp.status === 'connected') {
         var userID = resp.authResponse.userID
        }else if (resp.status === 'not_authorized') {
            console.log("not authorized to facebook");
        }else {
           console.log("hello callback from facbooklogin component"); 
        }
        console.log(userID);
    };  

  ngOnInit() {
  
  	FB.getLoginStatus(response => {
            this.statusChangeCallback(response);
        });

  }

}

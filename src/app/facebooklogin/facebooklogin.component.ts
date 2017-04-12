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

  model: any = {};
  loading = false;
  returnUrl: string;
 

  constructor(
  	private notifyService: NotificationService,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
  	) { 

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
        console.log("connected walid");
         var userID = resp.authResponse.userID
        		
         this.loading = true;
         
         this.authenticationService.loginFB(userID)
      	.subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
          let obj = {user_id : userID};
          this.notifyService.sendLoginMessage(obj);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });	

        }else if (resp.status === 'not_authorized') {
            console.log("not authorized to facebook");
        }else {
           console.log("hello callback from facbooklogin component"); 
        }
       
       
    };  
 
  ngOnInit() {
  
  	  this.authenticationService.logout();
     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  	FB.getLoginStatus(response => {
            this.statusChangeCallback(response);
        });
  	
  }

}

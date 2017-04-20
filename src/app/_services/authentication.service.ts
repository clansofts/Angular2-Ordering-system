import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { User } from '../_models/user';
import {NotificationService} from "./notification.service";

import {AppSettings} from '../app.settings';


@Injectable()
export class AuthenticationService {

  currentUser: User;

  constructor(private http: Http,private  notifyService: NotificationService) { }

    login(email: string, password: string) {
        return this.http.post(AppSettings.API_ENDPOINT + '/auth/login', { email: email, password: password })
            .map((response: Response) => {
                let user = response.json();
                if (user && user.token) {
                  localStorage.setItem('currentUser', JSON.stringify(user));
                  window.location.replace("/");

                }
            });
    }

    loginFB(fb_user : any){
        return this.http.post(AppSettings.API_ENDPOINT + '/auth/facebook',fb_user)
          .map((response: Response) => {
            let user = response.json();
            if (user && user.token){
              localStorage.setItem('currentUser', JSON.stringify(user));
              window.location.replace("/");
            }
          });

    }

    logout() {
        if (this.getCurrentUser() != null)
        {
          let obj =  {user_id : this.getCurrentUser()._id};
          this.notifyService.sendLogoutMessage(obj);
          localStorage.removeItem('currentUser');
          window.location.reload();
        }
    }


    getCurrentUser(){
      return JSON.parse(localStorage.getItem('currentUser'));
    }

    isLoggedIn(){
      return (this.getCurrentUser()) ? true : false;
    }

    userAvatarSrc(user){
      if (user.avatar) {
        if (user.facebookID) {
          return user.avatar;
        }else{
          return AppSettings.API_ENDPOINT + '/uploads/' + user.avatar;
        }
      }else{
        return '/src/assets/images/default-avatar.jpg';
      }
    }

}

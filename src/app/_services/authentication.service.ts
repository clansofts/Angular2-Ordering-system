import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { User } from '../_models/user';

@Injectable()
export class AuthenticationService {

  currentUser: User;

  constructor(private http: Http) { }

    login(email: string, password: string) {
        return this.http.post('http://localhost:8090/auth/login', { email: email, password: password })
            .map((response: Response) => {
                let user = response.json();
                console.log(user);
                if (user && user.token) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }

    logout() {
        localStorage.removeItem('currentUser');
    }

    getCurrentUser(){
      return JSON.parse(localStorage.getItem('currentUser'));
    }

    isLoggedIn(){
      return (this.getCurrentUser()) ? true : false;
    }

}

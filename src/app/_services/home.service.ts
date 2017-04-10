import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { Order } from '../_models/order';

import {URLSearchParams, Http, RequestOptions, Headers, Response} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HomeService {

  constructor(private http: Http) { }

  getMyOrders(id:string){
    let Url='http://localhost:8090/orders/'+id;
    let options = this.jwt();
    return this.http.get(Url,options).toPromise().then(response => <Order[]> response.json())
  }

  getFriendsOrders(id:string){
    let Url='http://localhost:8090/orders/'+id+'/friends';
    let options = this.jwt();
    return this.http.get(Url,options).toPromise().then(response => <Order[]> response.json())
  }

  private jwt() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      return new RequestOptions({ headers: headers });
    }
  }
}

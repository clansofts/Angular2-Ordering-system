import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { User } from '../_models/group';
import {Observable} from "rxjs";


@Injectable()
export class ListGroupsService {

  constructor(private http: Http) {}

   // list() {
   //     return this.http.get('http://localhost:8090/groups', user, this.jwt()).map((response: Response) => response.json());
   // }
   //
   // private jwt() {
   //     let currentUser = JSON.parse(localStorage.getItem('currentUser'));
   //     if (currentUser && currentUser.token) {
   //         let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
   //         return new RequestOptions({ headers: headers });
   //     }
   // }

}

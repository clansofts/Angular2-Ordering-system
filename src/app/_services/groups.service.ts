import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Group } from '../_models/Group';
import {Observable} from "rxjs";
import 'rxjs/add/operator/toPromise';


@Injectable()
export class GroupsService {

  constructor(private http: Http) { }

  list() {
<<<<<<< HEAD
      //return this.http.get('http://localhost:8090/groups', this.jwt()).toPromise().then(response => response.json() as Group[]);
      //return this.http.get('http://localhost:8090/groups', this.jwt()).toPromise();
      return this.http.get('http://localhost:8090/groups', this.jwt()).map((response: Response)=>{response.json()});
=======
      return this.http.get('http://localhost:8090/groups/list', this.jwt()).map(response => <string[]> response.json());;
>>>>>>> a87811dba01af3372f9305c01b076dd1820fc2ef
  }

  private jwt() {
      let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (currentUser && currentUser.token) {
          let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
          return new RequestOptions({ headers: headers });
      }
  }

}

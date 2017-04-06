import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Group } from '../_models/Group';
import {Observable} from "rxjs";
import 'rxjs/add/operator/toPromise';


@Injectable()
export class GroupsService {

  constructor(private http: Http) { }

  list() {

      return this.http.get('http://localhost:8090/groups/list', this.jwt()).map(response => <Group[]> response.json());;

  }

  add(group: Group) {
    console.log("service");
    return this.http.post('http://localhost:8090/groups/add', group, this.jwt()).map((response: Response) => response.json());
  }

  private jwt() {
      let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (currentUser && currentUser.token) {
          let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
          return new RequestOptions({ headers: headers });
      }
  }

}

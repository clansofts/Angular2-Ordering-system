import { Injectable } from '@angular/core';
import {User} from "../_models/user";
import {URLSearchParams, Http, RequestOptions, Headers, Response} from "@angular/http";
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

  addMember(query) {

    let searchUrl = 'http://localhost:8090/groups/members/add';
    let params = new URLSearchParams();
    params.set('name', query.name);
    params.set('uid', query.uid);
     let options = this.jwt();
     options.search = params;
    return this.http
      .get(searchUrl,options)
      .map(response => response.json());
  }

  listMembers() {
    let Url = 'http://localhost:8090/groups/';
    let params = new URLSearchParams();
    params.set('name', "os");
    let options = this.jwt();
    options.search = params;
    console.log("params :",params);
    return this.http.get(Url,options)
      .toPromise()
      .then(response => response.json() as User[])

  }

  private jwt() {
      let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (currentUser && currentUser.token) {
          let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
          return new RequestOptions({ headers: headers });
      }
  }

}

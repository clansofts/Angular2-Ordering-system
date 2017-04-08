import { Injectable } from '@angular/core';
import {User} from "../_models/user";
import {URLSearchParams, Http, RequestOptions, Headers, Response} from "@angular/http";
import { Group } from '../_models/Group';
import {Observable} from "rxjs";
import 'rxjs/add/operator/toPromise';


@Injectable()
export class GroupsService {

  constructor(private http: Http) { }

  list(name:string) {
    return this.http.get('http://localhost:8090/groups/'+name+'/list', this.jwt()).map(response => <Group[]> response.json());;
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

  listMembers(gname:string) {
    // let Url = 'http://localhost:8090/groups/';
    // let params = new URLSearchParams();
    // params.set('name', "os");
    // let options = this.jwt();
    // options.search = params;
    // console.log("params :",params);
    // return this.http.get(Url,options)
    //   .toPromise()
    //   .then(response => response.json() as User[])

    let Url = 'http://localhost:8090/groups/'+gname+'/members';
    //let params = new URLSearchParams();
    //params.set('name', "os");
    let options = this.jwt();
    //options.search = params;
    console.log("url :",Url);
    return this.http.get(Url,options).toPromise().then(response => <User[]> response.json()  )

  }

  private jwt() {
      let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (currentUser && currentUser.token) {
          let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
          return new RequestOptions({ headers: headers });
      }
  }

}

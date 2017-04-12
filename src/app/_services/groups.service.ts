import { Injectable } from '@angular/core';
import {User} from "../_models/user";
import {URLSearchParams, Http, RequestOptions, Headers, Response} from "@angular/http";
import { Group } from '../_models/Group';
import {Observable} from "rxjs";
import 'rxjs/add/operator/toPromise';


@Injectable()
export class GroupsService {

  constructor(private http: Http) { }

  list(id:string) {
    return this.http.get('http://localhost:8090/groups/'+id+'/list', this.jwt()).map(response => <Group[]> response.json());;
  }

  add(group: any) {
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

  listMembers(id:string) {
    let Url = 'http://localhost:8090/groups/'+id+'/members';
    //let params = new URLSearchParams();
    //params.set('name', "os");
    let options = this.jwt();
    //options.search = params;
    console.log("url :",Url);
    return this.http.get(Url,options).toPromise().then(response => <User[]> response.json())

  }
  deleteMember(gid:string,uid:string) {
    let Url = 'http://localhost:8090/groups/'+gid+'/members/'+uid;
    //let params = new URLSearchParams();
    //params.set('name', "os");
    let options = this.jwt();
    //options.search = params;
    console.log("url :",Url);
    return this.http.delete(Url,options).toPromise().then(response => response.json())

  }
  deleteGroup(gid:string) {
    let Url = 'http://localhost:8090/groups/'+gid;
    //let params = new URLSearchParams();
    //params.set('name', "os");
    let options = this.jwt();
    //options.search = params;
    console.log("url :",Url);
    return this.http.delete(Url,options).toPromise().then(response => response.json())

  }

  search(data) {
    if (data === '') {
      return Observable.of([]);
    }

    let searchUrl = 'http://localhost:8090/groups/search';

    let params = new URLSearchParams();
    params.set('user_id', data.user_id);
    params.set('field', data.field);
    params.set('q', data.q);

    let options = this.jwt();
    options.search = params;

    return this.http
      .get(searchUrl, options)
      .map(response => <string[]> response.json());
  }

  private jwt() {
      let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (currentUser && currentUser.token) {
          let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
          return new RequestOptions({ headers: headers });
      }
  }

}

import { Injectable } from '@angular/core';
import {User} from "../_models/user";
import {URLSearchParams, Http, RequestOptions, Headers, Response} from "@angular/http";
import { Group } from '../_models/Group';
import {Observable} from "rxjs";
import 'rxjs/add/operator/toPromise';

import {AppSettings} from '../app.settings';

@Injectable()
export class GroupsService {

  constructor(private http: Http) { }

  list(id:string) {
    return this.http.get(AppSettings.API_ENDPOINT + '/groups/'+id+'/list', this.jwt()).map(response => <Group[]> response.json());;
  }

  add(group: any) {
    return this.http.post(AppSettings.API_ENDPOINT + '/groups/add', group, this.jwt()).map((response: Response) => response.json());
  }

  addMember(query) {

    let searchUrl = AppSettings.API_ENDPOINT + '/groups/members/add';
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
    let Url = AppSettings.API_ENDPOINT + '/groups/'+id+'/members';
    //let params = new URLSearchParams();
    //params.set('name', "os");
    let options = this.jwt();
    //options.search = params;
    console.log("url :",Url);
    return this.http.get(Url,options).toPromise().then(response => <User[]> response.json())

  }
  deleteMember(gid:string,uid:string) {
    let Url = AppSettings.API_ENDPOINT + '/groups/'+gid+'/members/'+uid;
    //let params = new URLSearchParams();
    //params.set('name', "os");
    let options = this.jwt();
    //options.search = params;
    console.log("url :",Url);
    return this.http.delete(Url,options).toPromise().then(response => response.json())

  }
  deleteGroup(gid:string) {
    let Url = AppSettings.API_ENDPOINT + '/groups/'+gid;
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

    let searchUrl = AppSettings.API_ENDPOINT + '/groups/search';

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

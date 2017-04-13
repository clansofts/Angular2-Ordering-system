import { Injectable } from '@angular/core';
import {User} from "../_models/user";
import {URLSearchParams, Http, RequestOptions, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";

@Injectable()
export class FriendsService {
  verifyDelete: boolean = false;

  constructor(private http: Http) { }


  makeFriendShip(query) {

    let searchUrl = 'http://localhost:8090/follow/add';
    let params = new URLSearchParams();
    params.set('from', query.reqFrom);
    params.set('to', query.reqTo);
    let options = this.jwt();
    options.search = params;
    return this.http
      .get(searchUrl, options)
      .map(response => response.json());
  }


  deleteFriend(query): Promise<any>{
    let Url = 'http://localhost:8090/follow/delete';
    let params = new URLSearchParams();
    params.set('from', query.reqFrom);
    params.set('to', query.reqTo);
    let options = this.jwt();
    options.search = params;
    return this.http.get(Url,options)
      .toPromise()
      .then((response) => {
        this.verifyDelete = true;
        response.json() as User;
      })
      .catch(this.handleError);
  }


  blockFriend(query): Promise<any>{
    let Url = 'http://localhost:8090/follow/block';
    let params = new URLSearchParams();
    params.set('from', query.reqFrom);
    params.set('to', query.reqTo);
    let options = this.jwt();
    options.search = params;
    return this.http.get(Url,options)
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }

  unBlockFriend(query): Promise<any>{
    let Url = 'http://localhost:8090/follow/unblock';
    let params = new URLSearchParams();
    params.set('from', query.reqFrom);
    params.set('to', query.reqTo);
    let options = this.jwt();
    options.search = params;
    return this.http.get(Url,options)
      .toPromise()
      .then((response) => {
        this.verifyDelete = true;
        response.json() as User;
      })
      .catch(this.handleError);
  }




  search(data) {
    if (data === '') {
      return Observable.of([]);
    }

    let searchUrl = 'http://localhost:8090/users/search';

    let params = new URLSearchParams();
    params.set('user_id', data.from);
    params.set('field', data.field);
    params.set('q', data.q);



    let options = this.jwt();
    options.search = params;
    console.log(data);
    return this.http
      .get(searchUrl, options)
      .map(response => <string[]> response.json());
  }


  getFriends(id: string): Promise<User[]>{
    let Url = 'http://localhost:8090/follow/list';
    let params = new URLSearchParams();
    params.set('user_id', id);
    let options = this.jwt();
    options.search = params;
    console.log(params);
    return this.http.get(Url,options)
      .toPromise()
      .then(response => response.json() as User[])
      .catch(this.handleError);
  }


  getBlocked(id: string): Promise<User[]>{
    let Url = 'http://localhost:8090/follow/list/block';
    let params = new URLSearchParams();
    params.set('user_id', id);
    let options = this.jwt();
    options.search = params;
    console.log(params);
    return this.http.get(Url,options)
      .toPromise()
      .then(response => response.json() as User[])
      .catch(this.handleError);
  }

  getFollowers(id: string): Promise<User[]>{
    let Url = 'http://localhost:8090/follow/list/followers';
    let params = new URLSearchParams();
    params.set('user_id', id);
    let options = this.jwt();
    options.search = params;
    console.log(params);
    return this.http.get(Url,options)
      .toPromise()
      .then(response => response.json() as User[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  private jwt() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({'Authorization': 'Bearer ' + currentUser.token});
      return new RequestOptions({headers: headers});
    }
  }
}

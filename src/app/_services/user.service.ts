import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';

import {URLSearchParams, Jsonp} from '@angular/http';


import {User} from '../_models/user';
import {Observable} from "rxjs";
import {AppSettings} from '../app.settings';

@Injectable()
export class UserService {


  constructor(private http: Http, private _jsonp: Jsonp) {
  }

  create(user: User) {
    return this.http.post(AppSettings.API_ENDPOINT + '/auth/register', user, this.jwt()).map((response: Response) => response.json());
  }

  search(data) {
    if (data === '') {
      return Observable.of([]);
    }

    let searchUrl = AppSettings.API_ENDPOINT + '/users/search';

    let params = new URLSearchParams();
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
      let headers = new Headers({'Authorization': 'Bearer ' + currentUser.token});
      return new RequestOptions({headers: headers});
    }
  }
}

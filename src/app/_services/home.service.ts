import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import {URLSearchParams, Http, RequestOptions, Headers, Response} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HomeService {

  constructor(private http: Http) { }

  

}

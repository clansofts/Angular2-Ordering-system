import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import * as io from 'socket.io-client';
import {URLSearchParams, Headers, RequestOptions, Http} from "@angular/http";
import {User} from "../_models/user";
import {AppSettings} from '../app.settings';

@Injectable()
export class NotificationService {

  private url = AppSettings.API_ENDPOINT + '';
  private socket;
  private follower: User;
  private subject: Subject<User> = new Subject<User>();


  constructor(private http: Http) {
    this.socket = io(this.url);
  }

  sendMessage(message){
    this.socket.emit('add-message', message);
  }

  toMyFollowers(obj){
    this.socket.emit('toMyFollowers',obj);
  }


  setFollower(user: User): void {
    this.follower = user;
    console.log("from serv");
    console.log(user);
    this.subject.next(user);
  }

  getFollower(): Observable<User> {
    return this.subject.asObservable();
  }

  sendLoginMessage(obj){
    console.log(this.socket);
    this.socket.emit('login-message', obj);
  }

  sendLogoutMessage(obj){
    this.socket.emit('logout-message', obj);
  }

  getNewOrders() {
    console.log("get new orders");
    let observable = new Observable(
                     observer =>
                           {
                              //console.log(this.socket);
                               this.socket.on('newOrder', (data) =>
                                         {
                                           console.log("notify data ",data)
                                           observer.next(data);
                                         });
                               return () =>
                                         {
                                           this.socket.disconnect();
                                         };
                             })
       return observable;
     }

  getMessages() {
    let observable :any = new Observable(observer => {
      this.socket.on('message', (data) => {
        this.subject.next(data);
        console.log(data);
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }

  getMessagesFromDb(id: string): Promise<any>{
    let Url = AppSettings.API_ENDPOINT + '/notification/list';
    let params = new URLSearchParams();
    params.set('user_id', id);
    let options = this.jwt();
    options.search = params;
    return this.http.get(Url,options)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  sendReadnotiState(id: string): Promise<any>{
    let Url = AppSettings.API_ENDPOINT + '/notification/status';
    let params = new URLSearchParams();
    params.set('user_id', id);
    let options = this.jwt();
    options.search = params;
    return this.http.get(Url,options)
      .toPromise()
      .then(response => response.json())
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

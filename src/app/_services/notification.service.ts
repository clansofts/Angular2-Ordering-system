import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import * as io from 'socket.io-client';
import {URLSearchParams, Headers, RequestOptions, Http} from "@angular/http";

@Injectable()
export class NotificationService {

  private url = 'http://localhost:8090';
  private socket;

  constructor(private http: Http) { }

  sendMessage(message){
    this.socket.emit('add-message', message);
  }

  sendLoginMessage(obj){
    this.socket.emit('login-message', obj);
  }

  sendLogoutMessage(obj){
    console.log(obj);
    this.socket.emit('logout-message', obj);
  }

  getMessages() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('message', (data) => {
        console.log(data);
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }

  getMessagesFromDb(id: string): Promise<any>{
    let Url = 'http://localhost:8090/notification/list';
    let params = new URLSearchParams();
    params.set('user_id', id);
    let options = this.jwt();
    options.search = params;
    console.log(params);
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

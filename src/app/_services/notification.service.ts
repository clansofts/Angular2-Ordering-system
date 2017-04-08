import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import * as io from 'socket.io-client';

@Injectable()
export class NotificationService {

  private url = 'http://localhost:8090';
  private socket;

  constructor() { }

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

}

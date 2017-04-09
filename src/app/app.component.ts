import {Component, OnInit, OnDestroy, OnChanges, DoCheck} from '@angular/core';

import { AuthenticationService } from './_services/authentication.service';
import {NotificationService} from "./_services/notification.service";
import { UtilService } from './_services/util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy,  OnChanges, DoCheck{
  title = 'app works!';
  messages = [];
  connection;
  message;

  constructor(
      private authenticationService: AuthenticationService,
      private notifyService: NotificationService,
      private _util: UtilService,
    ) {}


  ngOnInit() {
    this.connection = this.notifyService.getMessages().subscribe(message => {
      console.log(typeof message);
      console.log(message);
      this.messages.push(message['notification']);
    });
    this.getNotiFromDb();
  }

  getNotiFromDb(){
    if(this.authenticationService.isLoggedIn())
    this.notifyService.getMessagesFromDb(this.authenticationService.getCurrentUser().id).then(message =>{
      for (var i=0; i<message['notifications'].length ; i++)
      {
        this.messages.push(message['notifications'][i]);
      }
      console.log(this.messages);
    });
  }


  ngOnChanges()
  {
    console.log("ng change");
  }

  ngDoCheck()
  {
    console.log("ng check");
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }


  // sendMessage(){
  //   this.notifyService.sendMessage(this.message);
  //   this.message = '';
  // }

}

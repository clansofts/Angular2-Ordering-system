import {Component, OnInit, OnDestroy} from '@angular/core';

import { AuthenticationService } from './_services/authentication.service';
import {NotificationService} from "./_services/notification.service";
import { UtilService } from './_services/util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'app works!';
  messages;
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
      this.message=message;
    });
    this.notifyService.sendMessage("app say hi");
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }


  sendMessage(){
    this.notifyService.sendMessage(this.message);
    this.message = '';
  }

}

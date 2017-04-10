import {Component, OnInit, OnDestroy} from '@angular/core';
import {UtilService} from "../_services/util.service";
import {NotificationService} from "../_services/notification.service";
import {AuthenticationService} from "../_services/authentication.service";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit, OnDestroy {
  messages = [];
  connection;
  message;

  constructor(
    private authenticationService: AuthenticationService,
    private notifyService: NotificationService,
    private _util: UtilService,
  ) { }

  ngOnInit() {
    let obj = {user_id : this.authenticationService.getCurrentUser()._id};
    this.notifyService.sendLoginMessage(obj);
    this.connection = this.notifyService.getMessages().subscribe(message => {
      console.log(typeof message);
      console.log(message);
      this.messages.push(message['notification']);
    });
    this.getNotiFromDb();
  }

  getNotiFromDb(){
    if(this.authenticationService.isLoggedIn())
      this.notifyService.getMessagesFromDb(this.authenticationService.getCurrentUser()._id).then(message =>{
        if (message)
        for (var i=0; i<message['notifications'].length ; i++)
        {
          this.messages.push(message['notifications'][i]);
        }
      });
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }


  // sendMessage(){
  //   this.notifyService.sendMessage(this.message);
  //   this.message = '';
  // }

}

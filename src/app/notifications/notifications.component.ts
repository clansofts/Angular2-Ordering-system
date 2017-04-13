import {Component, OnInit, OnDestroy} from '@angular/core';
import {UtilService} from "../_services/util.service";
import {NotificationService} from "../_services/notification.service";
import {AuthenticationService} from "../_services/authentication.service";
import {Subject} from "rxjs";
import {PushNotificationComponent} from "ng2-notifications/src/app/components/notification.component";
import {Router} from "@angular/router";
import {User} from "../_models/user";

@Component({
  entryComponents: [PushNotificationComponent],
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],

})
export class NotificationsComponent implements OnInit, OnDestroy {
  messages = [];
  connection;
  message;
  alert;
  staticAlertClosed =false;
  notificationMessage = {};
  pushNotification;
  cssClasses = {};
  response;
  countNotification=0;
  notificationReaded;
  followerObj: User;

  constructor(
    private authenticationService: AuthenticationService,
    private notifyService: NotificationService,
    private _util: UtilService,
    private router: Router
  ) {
      this.notificationMessage['title'] = "hi";
      this.notificationMessage['body'] = "hi";
      this.notificationMessage['icon'] = "https://goo.gl/3eqeiE";
    }

  ngOnInit() {
    let obj = {user_id : this.authenticationService.getCurrentUser()._id};
    this.notifyService.sendLoginMessage(obj);
    this.connection = this.notifyService.getMessages().subscribe(message => {
      this.countNotification++;
      this.notificationReaded = false;
      this.staticAlertClosed = true;
      this.notificationMessage['title'] = message['notification']['name'];
      this.notificationMessage['body'] = message['notification']['body'];
      this.notificationMessage['icon'] = 'http://localhost:8090/uploads/'+message['notification']['avatar'];
      this.notifyService.setFollower(message['user']);
      this.pushNotification.show();
      this.messages.push(message['notification']['body']);
    });
    this.getNotiFromDb();
  }


  getNotiFromDb(){
    if(this.authenticationService.isLoggedIn())
      this.notifyService.getMessagesFromDb(this.authenticationService.getCurrentUser()._id).then(message =>{
        this.notificationReaded = message.read_notification;
        if (message) {
          this.cssClasses = this.getCssClasses('notify');
          this.countNotification = 0;
          for (var i = 0; i < message['notifications'].length; i++) {
            this.countNotification++;
            this.messages.push(message['notifications'][i]);
          }
          if (this.notificationReaded)
          {
            this.countNotification = 0;
          }
        }
        else {
          this.cssClasses = this.getCssClasses('normal');
        }
      });
  }


  myFunction(){
    this.router.navigateByUrl("/");
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

  getNotiObj(pushNotification)
  {
    this.pushNotification = pushNotification;
  }

  getCssClasses(flag: string){
    let cssClasses;
    if(flag == 'normal') {
      cssClasses = {
        'nav-link': true,
      }
    } else {
      cssClasses = {
        'nav-link': true,
      }
    }
    return cssClasses;

  }

  sendRead()
  {

   this.notifyService.sendReadnotiState(this.authenticationService.getCurrentUser()._id).then(response => {
     this.response = response;
     if(this.response.mission)
     {
       this.countNotification = 0;
       this.notificationReaded=true;
     }
   });
  }

}

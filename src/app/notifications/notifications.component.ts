import {Component, OnInit, OnDestroy} from '@angular/core';
import {UtilService} from "../_services/util.service";
import {NotificationService} from "../_services/notification.service";
import {AuthenticationService} from "../_services/authentication.service";
import {Subject} from "rxjs";
import {PushNotificationComponent} from "ng2-notifications/src/app/components/notification.component";
import {Router} from "@angular/router";
import {User} from "../_models/user";
import {AppSettings} from "../app.settings";

@Component({
  entryComponents: [PushNotificationComponent],
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],

})
export class NotificationsComponent implements OnInit, OnDestroy {
  messages: any = [{}];
  connection;
  message;
  alert;
  staticAlertClosed = false;
  notificationMessage = {};
  pushNotification;
  pushNotiLink;
  cssClasses = {};
  response;
  countNotification = 0;
  notificationReaded;
  followerObj: User;

  constructor(private authenticationService: AuthenticationService,
              private notifyService: NotificationService,
              private _util: UtilService,
              private router: Router) {
    this.notificationMessage['title'] = "hi";
    this.notificationMessage['body'] = "hi";
    this.notificationMessage['icon'] = "https://goo.gl/3eqeiE";
  }

  ngOnInit() {
    let obj = {user_id: this.authenticationService.getCurrentUser()._id};
    this.notifyService.sendLoginMessage(obj);
    this.connection = this.notifyService.getMessages().subscribe(message => {
      this.countNotification++;
      this.notificationReaded = false;
      this.staticAlertClosed = true;
      this.notificationMessage['title'] = message['notification']['name'];
      this.notificationMessage['body'] = message['notification']['body'];
      this.notificationMessage['icon'] = message['notification']['avatar'];
      this.pushNotification.show();
      if (message.type == "friend") {
        this.notifyService.setFollower(message['user']);
        let link = "friends";
        this.pushNotiLink = link;
        this.messages.push({body: message.notification.body, link: link});
      }else if(message.type == "order_invitation")
      {
        let link = "order-details/"+message.order_id;
        this.pushNotiLink = link;
        this.messages.push({body: message.notification.body, link: link});
      }
    });
    this.getNotiFromDb();
  }


  getNotiFromDb() {
    if (this.authenticationService.isLoggedIn()) {
      this.notifyService.getMessagesFromDb(this.authenticationService.getCurrentUser()._id).then(message => {
        this.notificationReaded = message.read_notification;
        if (message) {
          this.cssClasses = this.getCssClasses('notify');
          this.countNotification = 0;
          for (var i = 0; i < message['notifications'].length; i++) {
            this.countNotification++;
            if (message['notifications'][i].type == "friend") {
              let link = "friends";
              this.messages.push({body: message['notifications'][i].body, link: link});
            }else if(message['notifications'][i].type == "order_invitation")
            {
              let link = "order-details/"+message['notifications'][i].order_id;
              this.messages.push({body: message['notifications'][i].body, link: link});
            }
          }
          if (this.notificationReaded) {
            this.countNotification = 0;
          }
          this.countNotification = message.unreaded_count;
        }else {
          this.cssClasses = this.getCssClasses('normal');
        }
      });
    }
  }


  pushNotiAction(e) {
    console.log("hi");
    this.router.navigateByUrl(this.pushNotiLink);
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

  getNotiObj(pushNotification) {
    this.pushNotification = pushNotification;
  }

  getCssClasses(flag: string) {
    let cssClasses;
    if (flag == 'normal') {
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

  sendRead() {

    this.notifyService.sendReadnotiState(this.authenticationService.getCurrentUser()._id).then(response => {
      this.response = response;
      if (this.response.mission) {
        this.countNotification = 0;
        this.notificationReaded = true;
      }
    });
  }

}

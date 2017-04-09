import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { Routes, RouterModule } from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AlertService } from './_services/alert.service';
import { AuthenticationService } from './_services/authentication.service';
import { UserService } from './_services/user.service';
import { GroupsService } from './_services/groups.service';
import { AlertComponent } from './_helpers/alert.component';
import { OrderService } from './_services/orders.service';

import { AuthGuard } from './_guards/auth.guard';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FriendsComponent } from './friends/friends.component';
import { AppRoutingModule} from "./app-routing.module";
import { FriendSearchComponent } from './friend-search/friend-search.component';

import { GroupsComponent } from './groups/groups.component';
import { GroupInfoComponent } from './group-info/group-info.component';


import { AddOrderComponent } from './add-order/add-order.component';
import { UserCardComponent } from './user-card/user-card.component';
import {FriendsService} from "./_services/friends.service";
import {UtilService} from "./_services/util.service";
import {NotificationService} from "./_services/notification.service";

import { FileSelectDirective } from 'ng2-file-upload';
import { NotificationsComponent } from './notifications/notifications.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AlertComponent,
    FriendsComponent,
    FriendSearchComponent,
    GroupsComponent,
    GroupInfoComponent,
    AddOrderComponent,
    UserCardComponent,
    FileSelectDirective,
    NotificationsComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    GroupsService,
    AlertService,
    AuthenticationService,
    FriendsService,
    UserService,
    OrderService,
    UtilService,
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

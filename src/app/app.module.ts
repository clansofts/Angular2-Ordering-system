import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AlertService } from './_services/alert.service';
import { AuthenticationService } from './_services/authentication.service';
import { UserService } from './_services/user.service';

import { AlertComponent } from './_helpers/alert.component';

import { AuthGuard } from './_guards/auth.guard';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FriendsComponent } from './friends/friends.component';
import {AppRoutingModule} from "./app-routing.module";
import { FriendSearchComponent } from './friend-search/friend-search.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupInfoComponent } from './group-info/group-info.component';
import { AddGroupComponent } from './add-group/add-group.component';
import { ListGroupsComponent } from './list-groups/list-groups.component';

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
    AddGroupComponent,
    ListGroupsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    AuthGuard,

    AlertService,
    AuthenticationService,

    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";

import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {FriendsComponent} from "./friends/friends.component";
import {GroupsComponent} from "./groups/groups.component";
import {AddOrderComponent} from "./add-order/add-order.component";

import {AuthGuard} from "./_guards/auth.guard";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'friends', component: FriendsComponent, canActivate: [AuthGuard]},
  { path: 'add-order', component: AddOrderComponent, canActivate: [AuthGuard]},
  { path: 'groups', component: GroupsComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

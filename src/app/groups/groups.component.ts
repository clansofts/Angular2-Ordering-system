import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../_services/groups.service';
import { Group } from '../_models/Group';
import { User } from '../_models/user';
import { AuthenticationService } from '../_services/authentication.service';
import {UserService} from '../_services/user.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import {FriendsService} from "../_services/friends.service";
import {UtilService} from "../_services/util.service";

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css'],
  providers:[GroupsService,AuthenticationService]
})
export class GroupsComponent implements OnInit {

  currentUser: User;
  member:User;
  groups: Group[];
  currentGroup:Group;
  invited_users = [];
  members:any[];
  invited_id:any;
  private query;
  tmp: any = {invite: {}, invite_valid: true};
  loading = false;
  searching = false;
  searchFailed = false;


  constructor(private groupService: GroupsService,private friendService: FriendsService,  private uerService: AuthenticationService,private _user: UserService) {
      this.currentUser=uerService.getCurrentUser();
      console.log("user",this.currentUser);
  }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(300)
      .distinctUntilChanged()
      .do(() => this.searching = true)
      .switchMap(term =>
        this.friendService.search({field: "name", q: term})
          .do(() => this.searchFailed = false)
          .catch(() => {
            this.searchFailed = true;
            return Observable.of([]);
          }))
      .do(() => this.searching = false);

  formatter = (x: {name: string}) => x.name;


  ngOnInit() {

    this.groupService.list(this.currentUser._id).subscribe(
      groups => {
        this.groups = groups;
        this.currentGroup=groups[0];
        // //all code must be here not out
        console.log("all groups :",this.groups);
        console.log("selected group",this.currentGroup.name);
        // console.log("retrun : ",this.groupService.listMembers("os"));
        this.groupService.listMembers(this.currentGroup.name).then( (members) => {
                                                      this.members=members['members'];
                                                      console.log("members",this.members.length)
                                                    });
      },
      err => {
        console.log(err);
      });



  }

  addGroup(name:string){
    console.log("add");
    this.groupService.add({owner:this.currentUser._id,name:name,members:[]}).subscribe(
      data =>{
        this.groups.push(data);
        console.log("return group ",data)
      },error => {}
    );
  }

  addMember(name,id): void {
      this.query = {name:name,uid:id};
      this.groupService.addMember(this.query)
       .subscribe(
        data => {
          if (!data.error)
          {
            // this.notifyAdd.emit(this.user);
            // this.user = null;
          }
        },
        error => {
          console.log("erro in adding",error);
        });
  }

  onSelect(group: Group): void {
  this.currentGroup = group;
  this.groupService.listMembers(this.currentGroup.name).then( (members) => {
                                                this.members=members['members'];
                                                console.log("members",this.members)
                                              });
  console.log(this.currentGroup);
}
inviteItemTmp(event) {
  this.tmp.invite = event.item;
}

inviteItemHandle() {
  var exists = false;
  for (var i = 0; i < this.invited_users.length; i++) {
    if (this.invited_users[i]._id == this.tmp.invite._id) {

      exists = true;
    }
  }
  if (exists) {
    this.tmp.invite_valid = false;
  } else {
      console.log(this.tmp.invite._id);
      this.addMember(this.currentGroup.name,this.tmp.invite._id);
    this.invited_users.push(this.tmp.invite);
  }
}

removeUser(user){
  for (var i = 0; i < this.invited_users.length; i++) {
    if (this.invited_users[i]._id == user._id) {
      this.invited_users.splice(i, 1);
    }
  }
}

}

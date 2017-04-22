import {Component, OnInit} from '@angular/core';
import {GroupsService} from '../_services/groups.service';
import {Group} from '../_models/Group';
import {User} from '../_models/user';
import {AuthenticationService} from '../_services/authentication.service';
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
  providers: [GroupsService, AuthenticationService,UtilService]
})

export class GroupsComponent implements OnInit {

  currentUser: User;
  member: User;
  groups: Group[]=[];
  currentGroup: Group;
  invited_users = [];
  members: any[];
  invited_id: any;
  private query;
  tmp: any = {invite: {}, invite_valid: true};
  groupValid:boolean=true;
  loading = false;
  searching = false;
  searchFailed = false;
  noGroups:boolean=true

  constructor(private _groups: GroupsService,
              private _friends: FriendsService,
              private _auth: AuthenticationService,
              private _user: UserService,
              private helper:UtilService) {}

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(300)
      .distinctUntilChanged()
      .do(() => this.searching = true)
      .switchMap(term =>
        this._friends.search({user_id: this._auth.getCurrentUser()._id, field: "name", q: term})
          .do(() => this.searchFailed = false)
          .catch(() => {
            this.searchFailed = true;
            return Observable.of([]);
          }))
      .do(() => this.searching = false);

  formatter = (x: {name: string}) => x.name;


  ngOnInit() {
    this.groupValid=true;
    this._groups.list(this._auth.getCurrentUser()._id).subscribe(
      groups => {
        console.log("^^^^",groups)
        this.groups = groups;
        if(this.groups.length>0){
          this.noGroups=false;
          this.currentGroup = groups[0];
          // //all code must be here not out
          console.log("all groups :", this.groups);
          console.log("selected group", this.currentGroup.name);
          // console.log("retrun : ",this.groupService.listMembers("os"));
          this._groups.listMembers(this.currentGroup._id).then((members) => {
            this.members = members['members'];
            console.log("members", this.members.length)
          });
        }

      },
      err => {
        console.log(err);
      });


  }

  ngOnChanges(){
    console.log("change");
  }
  ngDoCheck(){
    console.log("do check");
    this.groups=this.groups;
    console.log("noGroups",this.noGroups)
    if(this.groups.length>0){
      this.noGroups=false
      //this.currentGroup=this.groups[0]
    }
    else{
      this.noGroups=true
    }

  }

  addGroup(name: HTMLInputElement) {
    var flag=0;
    this.groups.forEach(function(group){
      if(name.value == group.name){
        flag=1;
      }
    })

    if(name.value!="" && flag==0 ){
      this._groups.add({ owner: this._auth.getCurrentUser()._id, name: name.value, members: []}).subscribe(
        data => {
          this.groups.push(data);


          console.log("Adding group ", data)
        }, error => {}
      );
    }
    else{
      this.groupValid = false;
    }
    name.value=null;

  }

  addMember(name, id): void {
    this.query = {name: name, uid: id};
    this._groups.addMember(this.query)
      .subscribe(
        data => {
          if (!data.error) {

          }
        },
        error => {
          console.log("erro in adding", error);
        });
  }

  onSelect(group: Group): void {
    this.currentGroup = group;
    this._groups.listMembers(this.currentGroup._id).then((members) => {
      this.members = members['members'];
      console.log("members", this.members)
    });
    console.log("currnet group : ",this.currentGroup);
  }

  inviteItemTmp(event) {
    this.tmp.invite = event.item;
  }

  inviteItemHandle(input: HTMLInputElement) {
    var exists = false;
    for (var i = 0; i < this.members.length; i++) {
      if (this.members[i]._id == this.tmp.invite._id) {

        exists = true;
      }
    }
    if (exists) {
      this.tmp.invite_valid = false;
    } else {
      console.log(this.tmp.invite._id);

      this.addMember(this.currentGroup.name, this.tmp.invite._id);
      this.members.push(this.tmp.invite);
      this.groups.forEach(function(group){
        if(group.name==this.currentGroup.name){
          group.members.push("1")
        }
      },this)
      input.value=null;
    }
  }

  removeUser(user) {
    console.log("remove :",user)
    for (var i = 0; i < this.members.length; i++) {
      if (this.members[i]._id == user._id) {
        this.members.splice(i, 1);
      }
    }
    console.log("currentGroup before deleteMember :",this.currentGroup)
    this.groups.forEach(function(group){
      if(group.name==this.currentGroup.name){
        group.members.pop();
      }
    },this)
    console.log("currentGroup after deleteMember :",this.currentGroup)
    this._groups.deleteMember(this.currentGroup._id,user._id).then()
  }
  onKey(){
    this.groupValid = true;
  }
  memberKey(){
    this.tmp.invite_valid = true;
  }
  deleteGroup(){
    console.log("target group",this.currentGroup)
    for(var i=0;i<this.groups.length;i++){
      if(this.groups[i]==this.currentGroup){
        console.log("found target")
        this.groups.splice(i,1)
      }
    console.log(this.currentGroup.name,"deleted")
    this._groups.deleteGroup(this.currentGroup._id).then()
    this.currentGroup=this.groups[0];
    console.log(this.groups)
    }
  }

}

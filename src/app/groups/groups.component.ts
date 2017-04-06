import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../_services/groups.service';
import { Group } from '../_models/Group';
import { User } from '../_models/user';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css'],
  providers:[GroupsService,AuthenticationService]
})
export class GroupsComponent implements OnInit {

  currentUser: User;
  groups: Group[];
  currentGroup;

  constructor(private groupService: GroupsService,private uerService: AuthenticationService) {
      this.currentUser=uerService.getCurrentUser();
      console.log("user",this.currentUser);
  }

  ngOnInit() {

    this.groupService.list().subscribe(
      groups => {
        this.groups = groups;
        //all code must be here not out
        console.log(this.groups);
      },
      err => {
        console.log(err);
      });

  }

  addGroup(name:string){
    console.log("add");
    this.groupService.add({owner:this.currentUser.name,name:name}).subscribe(
      data =>{},error => {}
    );
  }

}

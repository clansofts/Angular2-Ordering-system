import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../_services/groups.service';
import { Group } from '../_models/Group';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css'],
  providers:[GroupsService]
})
export class GroupsComponent implements OnInit {

  groups: Group[];
  currentGroup;

  constructor(private groupService: GroupsService) {

  }

  ngOnInit() {
    //console.log("list");
    console.log("==",this.groupService.list());
    this.groupService.list().then((res)=>this.groups = res.json());
    //this.groupService.list().then((res)=>{ this.groups = res });

    //this.groupService.list().subscribe(data => this.groups  );
    //this.groupService.list().then((res)=>{ this.groups = res });;
    console.log("--",this.groups);
    //this.groups=this.groupService.list();

  }

}

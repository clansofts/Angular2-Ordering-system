import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../_services/groups.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css'],
  providers:[GroupsService]
})
export class GroupsComponent implements OnInit {

  groups={};
  currentGroup;

  constructor(private groupService: GroupsService) {

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

}

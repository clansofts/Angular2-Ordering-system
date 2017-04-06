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
<<<<<<< HEAD
    //console.log("list");
    console.log("==",this.groupService.list());
    //this.groupService.list();
    //this.groupService.list().then((res)=>{ groups =>this.groups = groups });

    //this.groupService.list().subscribe(data =>{  this.groups = data[0];  console.log(this.groups);}  );
    //this.groupService.list().then((res)=>{ this.groups = res });;
    console.log("--",this.groups);
    //this.groups=this.groupService.list();

=======
    this.groupService.list().subscribe(
      groups => {
        this.groups = groups;
        //all code must be here not out
        console.log(this.groups);
      },
      err => {
        console.log(err);
      });
>>>>>>> a87811dba01af3372f9305c01b076dd1820fc2ef
  }

}

import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../_models/user";
import {UserService} from "../_services/user.service";

import {Subject} from 'rxjs/Subject';
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-friend-search',
  templateUrl: './friend-search.component.html',
  styleUrls: ['./friend-search.component.css']
})
export class FriendSearchComponent implements OnInit {

  user: User;
  private searchTerms = new Subject<string>();

  constructor(private userService: UserService) {
  }


  // Push a search term into the observable stream.
  search(term: string): void {
    if (term != '')
      this.userService.getByEmail(term)
        .subscribe(
          data => {
            this.user = data[0];
            console.log(this.user);
          },
          error => {
            console.log(error)
          });
  }

  // Push a search term into the observable stream.
  makeFreind(): void {

    this.userService.makeFriendShip(this.user._id).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      });

    console.log(this.user);

  }

  ngOnInit() {
  }

}

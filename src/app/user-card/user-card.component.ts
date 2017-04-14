import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {AppSettings} from '../app.settings';
import {AuthenticationService} from '../_services/authentication.service';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() user;
  @Input() button;
  @Input() badge;
  @Input() cssClass;
  @Output() buttonClicked = new EventEmitter();

  constructor(private _auth: AuthenticationService) { }

  ngOnInit() {
  }

  getCssClasses(){
    let cssClasses = ["user-card"];
    if (this.cssClass) {
      cssClasses.push(this.cssClass)
    }else{
      cssClasses.push("card")
    }
    return cssClasses;

  }

  doClick(event){
    this.buttonClicked.emit(this.user);
  }

}

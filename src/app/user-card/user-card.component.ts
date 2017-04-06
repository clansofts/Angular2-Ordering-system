import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() user;
  @Input() button;
  @Output() buttonClicked = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  doClick(event){
    this.buttonClicked.emit(this.user);
  }

}

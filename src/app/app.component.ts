import { Component,OnInit } from '@angular/core';

import { AuthenticationService } from './_services/authentication.service';
import { UtilService } from './_services/util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';


  constructor(
    private authenticationService: AuthenticationService,
    private _util: UtilService,
  ) {

  }

  ngOnInit() {

  }

}

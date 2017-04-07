import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from '../_services/alert.service';
import { UserService } from '../_services/user.service';

import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
const URL = 'http://localhost:8090/upload/photo';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  avatar: any = {valid:true,error: ""};
  loading = false;

  public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
      let jsonResponse = JSON.parse(response);
      if (jsonResponse.error) {
        this.avatar.valid = false;
        this.avatar.error = jsonResponse.error;
      }else if (jsonResponse.file){
        this.avatar.valid = true;
        this.model.avatar = jsonResponse.file;
      }
    };
  }

  register() {
    this.loading = true;

    this.userService.create(this.model)
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error.json().error);
          this.loading = false;
        });
  }

}

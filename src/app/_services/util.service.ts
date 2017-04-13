import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';

import {Observable} from "rxjs";

@Injectable()
export class UtilService {

  constructor(private http: Http,) { }

  objectPropInArray(list, prop, val): boolean  {
    console.log(list.length);
  if (list.length > 0 ) {
    for (var i in list) {
      console.log(list[i][prop]);
      if (list[i][prop] === val) {
        return true;
        }
      }
    }
    return false;
  }

  removeItem(arr, value): any {
  for (var b in arr) {
    if (arr[b] != null &&arr[b]._id === value._id) {
      arr.splice(b, 1);
      break;
    }
    }
    return arr;
  }

  removeUser(arr, value): any {
  for (var b in arr) {
    if (b != null && b === value._id) {
      arr.splice(b, 1);
      break;
    }
    }
    return arr;
  }


}

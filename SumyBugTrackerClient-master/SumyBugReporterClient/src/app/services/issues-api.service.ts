import { Injectable } from '@angular/core';
import {Issue} from '../issues/issue.model';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable} from "rxjs";

@Injectable()
export class IssuesApiService {
  issueElements: Issue[];
  constructor(private http: Http) {
    this.issueElements = [
      {
        state: 'статус',
        created_at: '10.3.2',
        updated_at: '10.3.2',
        id: 1,
        description: 'описание',
        address: 'Address',
        photo_path: 'path',
    author: {
          phone_number: '1232341234',
          first_name: 'Vlad',
          last_name: 'Reznichenko',
          user_id: '2'
        }
      }, {
        state: 'статус',
        created_at: '10.3.2',
        updated_at: '10.3.2',
        id: 1,
        description: 'описание',
        address: 'Address',
        photo_path: 'path',
        author: {
          phone_number: '1232341234',
          first_name: 'Vlad',
          last_name: 'Reznichenko',
          user_id: '2'
        }
      },
      {
        state: 'статус',
        created_at: '10.3.2',
        updated_at: '10.3.2',
        id: 1,
        description: 'описание',
        address: 'Address',
        photo_path: 'path',
        author: {
          phone_number: '1232341234',
          first_name: 'Vlad',
          last_name: 'Reznichenko',
          user_id: '2'
        }
      },
      {
        state: 'статус',
        created_at: '10.3.2',
        updated_at: '10.3.2',
        id: 1,
        description: 'описание',
        address: 'Address',
        photo_path: 'path',
        author: {
          phone_number: '1232341234',
          first_name: 'Vlad',
          last_name: 'Reznichenko',
          user_id: '2'
        }
      }
    ];
  }
  getIssues() {
    return this.http.get('http://54.164.108.6:3000/issues').map(res => res.json()).catch(this.handleError);
  }
  handleError(err: any) {
    return Observable.throw(err.message || err);
  }
  getTop3Issues() {
    // this.issueElements.sort((a, b) => {
    //   if (a.rate > b.rate) {
    //     return -1;
    //   }
    //   if (a.rate < b.rate) {
    //     return 1;
    //   }
    //   return 0;
    // });
    // const result = [];
    //
    // for ( let i = 0; i < 3; i++) {
    //     result.push(this.issueElements[i]);
    // }
    return this.issueElements;
  }
}

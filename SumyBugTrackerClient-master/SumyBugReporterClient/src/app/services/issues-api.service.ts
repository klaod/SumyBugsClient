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
  address = 'http://54.164.108.6:3000/';
  constructor(private http: Http) {}
  getIssues(req) {
    return this.http.get(this.address + req).map(res => res.json()).catch(this.handleError);
  }
  handleError(err: any) {
    return Observable.throw(err.message || err);
  }
};

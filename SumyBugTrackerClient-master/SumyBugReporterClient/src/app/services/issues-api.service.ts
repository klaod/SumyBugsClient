import { Injectable } from '@angular/core';
import {Issue} from '../issues/issue.model';

@Injectable()
export class IssuesApiService {
  issueElements: Issue[];
  constructor() {
    this.issueElements = [
      {
        issueId: 1,
        creationDate: new Date(),
        title: 'issue1',
        imgPath: 'issue2',
        description: 'issue3',
        rate: 1
      },
      {
        issueId: 2,
        creationDate: new Date(),
        title: 'issue2',
        imgPath: 'issue2',
        description: 'issue3',
        rate: 2
      },
      {
        issueId: 3,
        creationDate: new Date(),
        title: 'issue3',
        imgPath: 'path',
        description: 'desc',
        rate: 3
      },
      {
        issueId: 2,
        creationDate: new Date(),
        title: 'issue4',
        imgPath: 'issue2',
        description: 'issue3',
        rate: 4
      },
      {
        issueId: 2,
        creationDate: new Date(),
        title: 'issue5',
        imgPath: 'issue2',
        description: 'issue3',
        rate: 5
      }
    ];
  }
  getIssues() {
    return this.issueElements;
  }
  getTop3Issues() {
    this.issueElements.sort((a, b) => {
      if (a.rate > b.rate) {
        return -1;
      }
      if (a.rate < b.rate) {
        return 1;
      }
      return 0;
    });
    const result = [];

    for ( let i = 0; i < 3; i++) {
        result.push(this.issueElements[i]);
    }
    return result;
  }
}

import { Component, OnInit } from '@angular/core';
import {IssuesApiService} from '../services/issues-api.service';
import {Issue} from './issue.model';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {
  issueElements: Issue[];
  constructor(private issuesApi: IssuesApiService) { }

  ngOnInit() {
    this.issueElements = this.issuesApi.getIssues();
  }

}

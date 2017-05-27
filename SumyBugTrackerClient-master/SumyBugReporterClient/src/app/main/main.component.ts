import { Component, OnInit } from '@angular/core';
import {Issue} from '../issues/issue.model';
import {IssuesApiService} from "../services/issues-api.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  topRatedIssues: Issue[];
  constructor(private issuesApi: IssuesApiService) { }

  ngOnInit() {
     this.topRatedIssues = this.issuesApi.getTop3Issues();
  }
}

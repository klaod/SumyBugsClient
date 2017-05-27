import {Component, Input, OnInit} from '@angular/core';
import {Issue} from '../issue.model';
import {IssuesApiService} from "../../services/issues-api.service";

@Component({
  selector: 'app-issue-table',
  templateUrl: './issue-table.component.html',
  styleUrls: ['./issue-table.component.css']
})
export class IssueTableComponent implements OnInit {
  @Input() issueElements: Issue[];

  constructor() {
  }
  ngOnInit() {
  }
}

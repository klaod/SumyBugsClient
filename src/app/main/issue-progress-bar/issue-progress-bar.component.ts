import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-issue-progress-bar',
  templateUrl: './issue-progress-bar.component.html',
  styleUrls: ['./issue-progress-bar.component.css']
})
export class IssueProgressBarComponent implements OnInit {
  @Input() issuesCount: number;
  @Input() completeIssuesCount: number;
  constructor() {
    this.issuesCount = 10;
    this.completeIssuesCount = 5;
  };
  ngOnInit() {
  }

}

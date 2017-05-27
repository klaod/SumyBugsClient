import {Component, Input, OnInit} from '@angular/core';
import {Issue} from '../issues/issue.model';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {
  @Input() issue: Issue;
  constructor() { }

  ngOnInit() {
  }
}

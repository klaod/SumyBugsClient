import {Component, Input, OnInit} from '@angular/core';
import {Issue} from "../issue.model";

@Component({
  selector: 'app-issue-element',
  templateUrl: './issue-element.component.html',
  styleUrls: ['./issue-element.component.css']
})
export class IssueElementComponent implements OnInit {
  @Input() issue: Issue;
  constructor() { }

  ngOnInit() {
  }

}

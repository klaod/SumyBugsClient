import {Component, Input, OnInit} from '@angular/core';
import {Issue} from '../issue.model';
import {Store} from '@ngrx/store';
import {ISSUE_ACTIONS} from '../../issue/issue.reduser';

@Component({
  selector: 'app-issue-element',
  templateUrl: './issue-element.component.html',
  styleUrls: ['./issue-element.component.css']
})
export class IssueElementComponent implements OnInit {
  @Input() issue: Issue;
  constructor(private store: Store<Issue>) { }

  ngOnInit() {
  }
  addIssueToStore() {
    this.store.dispatch({type: ISSUE_ACTIONS.ADD_ISSUE, payload: this.issue});
  }

}

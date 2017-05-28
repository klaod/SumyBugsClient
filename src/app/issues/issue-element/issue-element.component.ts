import {Component, Input, OnInit} from '@angular/core';
import {Issue} from '../issue.model';
import {Store} from '@ngrx/store';
import {ISSUE_ACTIONS} from '../../issue/issue.reduser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-issue-element',
  templateUrl: './issue-element.component.html',
  styleUrls: ['./issue-element.component.css']
})
export class IssueElementComponent implements OnInit {
  @Input() issue: Issue;
  @Input() role: string;
  constructor(private store: Store<Issue>, private router: Router) { }

  ngOnInit() {
    this.role;
    debugger;
  }
  addIssueToStore() {
    this.router.navigate(['/issues/']);
    // this.store.dispatch({type: ISSUE_ACTIONS.ADD_ISSUE, payload: this.issue});
  }

}

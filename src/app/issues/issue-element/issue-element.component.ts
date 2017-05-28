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
  constructor(private router: Router) { }

  ngOnInit() {}
  addIssueToStore() {
   // this.router.navigate(['/issues/', this.issue.id]);
  }

}

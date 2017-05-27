import {Component, OnInit} from '@angular/core';
import {Issue} from '../issues/issue.model';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {
  issue: Issue;
  constructor(private store: Store<Issue>) { }

  ngOnInit() {
    this.store.select('issue').subscribe((state) => this.issue = state );
  }
}

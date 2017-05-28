import {Component, OnInit} from '@angular/core';
import {Issue} from '../issues/issue.model';
import {Store} from '@ngrx/store';
import {IssuesApiService} from '../services/issues-api.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {
  issue: Issue;
  constructor(private store: Store<Issue>, private issuesApi: IssuesApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    //this.store.select('issue').subscribe((state) => this.issue = state );
    this.route.params
        .switchMap((params: Params) => this.getIssue(params['id']))
        .subscribe(issue => {
          this.issue = issue;
        });
  }

  getIssue(id: number) {
    return this.issuesApi.getIssues('issues/' + id);
  }
}

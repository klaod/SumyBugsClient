import {Component, Input, OnInit} from '@angular/core';
import {Issue} from '../issues/issue.model';
import {IssuesApiService} from '../services/issues-api.service';

@Component({
  selector: 'app-moderate',
  templateUrl: './moderate.component.html',
  styleUrls: ['./moderate.component.css']
})
export class ModerateComponent implements OnInit {
  notModeratedIssues: Issue[];
  @Input() role: string;
  constructor(private issuesApi: IssuesApiService) { }

  ngOnInit() {
    this.issuesApi.getIssues('issues?state=Waiting Moderation').subscribe(issues => this.notModeratedIssues = issues);
  }
}

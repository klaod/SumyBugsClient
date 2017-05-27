import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssueTableComponent } from './issue-table/issue-table.component';
import {IssueElementComponent} from './issue-element/issue-element.component';
import {RouterModule} from '@angular/router';
import {issuesRoutes} from './issues.router';
import {IssuesComponent} from './issues.component';

@NgModule({
  imports: [
      RouterModule.forChild(issuesRoutes),
      CommonModule
  ],
  declarations: [
      IssueTableComponent,
      IssueElementComponent,
      IssuesComponent
  ],
  exports: [
      IssueTableComponent,
      IssuesComponent
  ]
})
export class IssuesModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { IssueProgressBarComponent } from './issue-progress-bar/issue-progress-bar.component';
import {mainRoutes} from './main.router';
import {RouterModule} from '@angular/router';
import {IssuesModule} from '../issues/issues.module';

@NgModule({
  imports: [
    RouterModule.forChild(mainRoutes),
    CommonModule,
    IssuesModule,
  ],
  declarations: [MainComponent, IssueProgressBarComponent],
  exports: [MainComponent, RouterModule]
})
export class MainModule { }

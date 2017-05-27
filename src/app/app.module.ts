import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {IssuesModule} from './issues/issues.module';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.router';
import {IssuesApiService} from './services/issues-api.service';
import {MainModule} from './main/main.module';
import {ModerateModule} from './moderate/moderate.module';
import {IssueModule} from './issue/issue.module';
import {StoreModule} from '@ngrx/store';
import {issueReducer} from './issue/issue.reduser';

import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    IssuesModule,
    MainModule,
    AlertModule,
    ModerateModule
    ModerateModule,
    IssueModule,
    StoreModule.provideStore({ issue: issueReducer })
  ],
  providers: [IssuesApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

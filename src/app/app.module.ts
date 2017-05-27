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
import { IssueComponent } from './issue/issue.component';

import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    IssueComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    IssuesModule,
    MainModule,
    AlertModule
  ],
  providers: [IssuesApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

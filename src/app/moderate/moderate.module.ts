import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModerateComponent} from './moderate.component';
import {IssuesModule} from '../issues/issues.module';

@NgModule({
  imports: [
    CommonModule,
      IssuesModule
  ],
  declarations: [ModerateComponent],
  exports: [ModerateComponent]
})
export class ModerateModule { }

import { Component } from '@angular/core';
import {ISSUE_ACTIONS} from "./issue/issue.reduser";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  role: string;
  constructor(private store: Store<any>) {
    this.role = '';
  }
  updateRole(value) {
    console.log(value);
    this.role = value;
    this.store.dispatch({type: ISSUE_ACTIONS.ADD_ISSUE, payload: this.role});
  }
}

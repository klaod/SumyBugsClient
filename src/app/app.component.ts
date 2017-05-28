import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  role: string;
  constructor() {
    this.role = '';
  }
  updateRole(value) {
    console.log(value);
    this.role = value;
  }
}

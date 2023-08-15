import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  ageOfUsers = [{ age: 20 }, { age: 26 }, { age: 22 }];

  constructor() {
    setTimeout(() => {
      // this.ageOfUsers.push({age: 16})
      this.ageOfUsers = [...this.ageOfUsers, { age: 16 }];
    }, 3000);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  color = 'green';
  parentName: string = 'hello, world!';

  changeColor(newColor: string) {
    this.color = newColor;
  }

  checkCurrentValue(event: Event) {
    const target = event.target as HTMLInputElement;

    console.log('e', target.value);
  }

  setNewName(newName: string) {
    this.parentName = newName;
  }
}

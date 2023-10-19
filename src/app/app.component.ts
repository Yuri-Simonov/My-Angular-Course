import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  toggler: boolean = true;
  str: string = '';

  arr: any[] = ['text', 123, true, [1, 'abc'], NaN, Symbol];
}

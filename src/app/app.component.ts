import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  toggler: boolean = true;
  arr: any[] = ['text', 123, true, [1, 'abc'], { key: 'key' }, NaN, Symbol];

  someTrackByMethod(index: number, item: any) {
    console.log(1);

    return item;
  }
}

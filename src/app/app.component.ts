import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  toggler: boolean = true;
  str: string = '';

  arr: any[] = ['text', 123, true, [1, 'abc'], NaN, Symbol]; // length = 6

  obj: any = {
    first: {
      second: {
        third: {
          age: 11,
          name: 'Mike',
        },
      },
    },
  };

  someTrackByMethod(index: number, item: any) {
    console.log(1);

    return item;
  }
}

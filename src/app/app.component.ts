import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'aadasdasd';

  user = {
    name: 'Yura',
    age: '27',
  };

  tooltip = 'Я подсказка для ссылки';

  inlineStyles = {
    width: '50%',
    background: 'green',
  };

  cssClass = 'blue';

  someNumber = '70';
}

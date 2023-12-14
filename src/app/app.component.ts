import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'Заголовок';
  name: string = 'Имя';
  toggler: boolean = true;
  obj = { age: 12 };

  constructor() {
    // setTimeout(() => {
    //   this.title = 'Другой заголовок';
    //   //   this.obj.age = 10;
    //   this.obj = { ...this.obj, age: 10 };
    // }, 3000);
    // console.log(
    //   '%c Компонент app-root успешно создан! ',
    //   'background: darkgreen',
    // );
  }

  //   ngOnChanges(): void {
  //     console.log('%c родительский ngOnChanges ', 'color: aqua');
  //   }

  //   ngOnInit(): void {
  //     console.log('%c родительский ngOnInit ', 'color: deepskyblue');
  //   }

  //   ngDoCheck(): void {
  //     console.log('%c родительский ngDoCheck ', 'color: pink');
  //   }

  //   ngAfterContentInit(): void {
  //     console.log('%c родительский ngAfterContentInit ', 'color: lightgreen');
  //   }

  //   ngAfterContentChecked(): void {
  //     console.log('%c родительский ngAfterContentChecked ', 'color: green');
  //   }

  //   ngAfterViewInit(): void {
  //     console.log('%c родительский ngAfterViewInit ', 'color: yellow');
  //   }

  //   ngAfterViewChecked(): void {
  //     console.log('%c родительский ngAfterViewChecked ', 'color: orange');
  //   }
}

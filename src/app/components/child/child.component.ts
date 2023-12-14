import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() title!: string;
  @Input() name!: string;
  @Input() obj!: any;

  text: string = 'Какой-то текст';

  constructor() {
    console.log(
      '%c Компонент app-child успешно создан! ',
      'background: darkgreen',
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('%c ngOnChanges', 'color: aqua');
    // console.log('changes', changes);
  }

  ngOnInit(): void {
    console.log('%c ngOnInit', 'color: deepskyblue');
  }

  ngDoCheck(): void {
    console.log('%c ngDoCheck', 'color: pink');
  }

  ngAfterContentInit(): void {
    console.log('%c ngAfterContentInit', 'color: lightgreen');
  }

  ngAfterContentChecked(): void {
    console.log('%c ngAfterContentChecked', 'color: green');
  }

  ngAfterViewInit(): void {
    console.log('%c ngAfterViewInit', 'color: yellow');
    // this.title = '123';
    setTimeout(() => {
      this.title = '123';
    }, 0);
  }

  ngAfterViewChecked(): void {
    console.log('%c ngAfterViewChecked', 'color: orange');
  }

  ngOnDestroy(): void {
    console.log('%c ngOnDestroy', 'color: red');
  }

  // ==========================================================================
  // Для примера работы метода ngAfterViewInit
  // ==========================================================================
  //   constructor() {
  //     console.log(
  //       '%c Компонент app-child успешно создан! ',
  //       'background: darkgreen',
  //     );
  //   }

  //   ngOnChanges(): void {
  //     console.log('%c дочерний ngOnChanges ', 'color: aqua; background: black');
  //   }

  //   ngOnInit(): void {
  //     console.log(
  //       '%c дочерний ngOnInit ',
  //       'color: deepskyblue; background: black',
  //     );
  //   }

  //   ngDoCheck(): void {
  //     console.log('%c дочерний ngDoCheck ', 'color: pink; background: black');
  //   }

  //   ngAfterContentInit(): void {
  //     console.log(
  //       '%c дочерний ngAfterContentInit ',
  //       'color: lightgreen; background: black',
  //     );
  //   }

  //   ngAfterContentChecked(): void {
  //     console.log(
  //       '%c дочерний ngAfterContentChecked ',
  //       'color: green; background: black',
  //     );
  //   }

  //   ngAfterViewInit(): void {
  //     console.log(
  //       '%c дочерний ngAfterViewInit ',
  //       'color: yellow; background: black',
  //     );
  //   }

  //   ngAfterViewChecked(): void {
  //     console.log(
  //       '%c дочерний ngAfterViewChecked ',
  //       'color: orange; background: black',
  //     );
  //   }
}

import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]',
  host: {
    /**
     * Статические варианты записей
     */
    // style: 'color: lime',
    // class: 'some-css-class',
    // color: 'some-attr-data',
    // color: '',
    /**
     * Динамические варианты записей
     */
    // '[style.color]': '"lime"',
    // '[style.width.%]': '20',
    // '[class.some-css-class]': 'true',
    // '[attr.color]': '"some-attr-data"',
    // '[attr.color]': '""',
    '[style.color]': 'inlineStyle',
    // '[style.color]': '!true ? "green" : "red"',
    '[attr.color]': 'appCustomDirective',
    // '(document:click)': 'changeColor($event, true)',
    '(document:click)': 'true && changeColor($event, true)',
  },
})
export class CustomDirectiveDirective {
  inlineStyle: string = 'orange';

  @Input() appCustomDirective!: string;

  //   @HostListener('document:click') handleClick() {
  //     this.changeColor();
  //   }

  //   ngOnInit() {
  //     setInterval(() => {
  //       this.changeColor();
  //     }, 1000);
  //   }

  changeColor(...args: any) {
    console.log('args', args);

    this.inlineStyle =
      '#' +
      (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
  }
}

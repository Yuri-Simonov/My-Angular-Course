import {
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appCustomDirective]',
  exportAs: 'custom',
})
export class CustomDirectiveDirective {
  @Input('color') colorProps!: string;
  @Input('appCustomDirective') appCustomDirectiveProps!: string;

  @Output() colorChange = new EventEmitter();

  constructor(private element: ElementRef) {
    console.log('appCustomDirective');
    console.log('element', this.element);

    this.element.nativeElement.style.color = 'red';
  }

  @HostBinding('style.color') color: string = 'lime';
  @HostBinding('attr.color') attr: string = 'lime';
  @HostBinding('class.color') class: boolean = true;
  @HostBinding('style.background') bgColor = 'transparent';

  //   @HostBinding('style.color') color = null; // или undefined
  //   @HostBinding('attr.color') attr: any;
  //   @HostBinding('class.color') class = false;

  //   @HostListener('document:click', ['$event.target']) handleClick(data: any) {
  //     // console.log('click!');
  //     console.log('data', data);
  //   }

  @HostListener('click') handleClick(data: any) {
    this.getRandomColor();
  }

  //   @HostListener('mouseenter') handleMouseenter(data: any) {
  //     this.bgColor = 'orange';
  //   }
  //   @HostListener('mouseleave') handleMouseleave(data: any) {
  //     this.bgColor = 'transparent';
  //   }

  ngOnChanges() {
    console.log('colorProps', this.colorProps);
    console.log('appCustomDirectiveProps', this.appCustomDirectiveProps);

    this.bgColor = this.appCustomDirectiveProps;
  }

  getRandomColor() {
    const newColor =
      '#' +
      (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();

    this.colorChange.emit(newColor);

    return newColor;
  }
}

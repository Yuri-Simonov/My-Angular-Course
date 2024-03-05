import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]',
  exportAs: 'custom',
})
export class CustomDirectiveDirective {
  @Input() appCustomDirective: any;
  @Input() appCustomDirectiveHello: any;

  time!: Date;

  constructor(
    private template: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
  ) {}

  //   ngOnInit() {
  //     this.viewContainer.createEmbeddedView(this.template);
  //   }

  ngOnChanges() {
    console.log('hello', this.appCustomDirectiveHello);

    this.time = new Date();
    this.appCustomDirective
      ? this.viewContainer.createEmbeddedView(this.template, {
          time: this.time,
        })
      : this.viewContainer.clear();
  }
}

import { Directive, ViewContainerRef } from '@angular/core';
import { DynamicComponent } from '../components/dynamic/dynamic.component';

@Directive({
  selector: '[appCustomDirective]',
  exportAs: 'custom',
})
export class CustomDirectiveDirective {
  constructor(private viewContainer: ViewContainerRef) {}

  ngOnInit() {
    this.viewContainer.createComponent(DynamicComponent);
  }
}

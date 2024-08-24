import { Component, ElementRef } from '@angular/core';

@Component({
    selector: 'app-colorize',
    standalone: true,
    template: '',
})
export class ColorizeComponent {
    ccsClass = 'colorize';
    body = document.body;

    constructor(protected element: ElementRef) {}

    colorize() {
        const componentName = this.element.nativeElement.localName;
        const component = this.body.querySelector(componentName);
        component.classList.add(this.ccsClass);
        setTimeout(() => {
            component.classList.remove(this.ccsClass);
        }, 1000);
    }
}

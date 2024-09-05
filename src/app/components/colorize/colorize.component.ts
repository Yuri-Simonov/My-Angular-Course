import { Component, ElementRef } from '@angular/core';

@Component({
    selector: 'app-colorize',
    standalone: true,
    template: '',
})
export class ColorizeComponent {
    ccsClass = 'colorize';
    body = document.body;
    number: number = 0;

    constructor(protected element: ElementRef) {}

    colorize() {
        this.number++;
        console.log('colorize', this.number);
        const componentName = this.element.nativeElement.localName;
        const component = this.body.querySelector(componentName);
        component.classList.add(this.ccsClass);
        setTimeout(() => {
            component.classList.remove(this.ccsClass);
        }, 1000);
    }
}

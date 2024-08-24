import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
} from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { ColorizeComponent } from './components/colorize/colorize.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [HeaderComponent, MainComponent, ColorizeComponent],
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent extends ColorizeComponent {
    counter: number = 0;

    constructor(element: ElementRef, private cdr: ChangeDetectorRef) {
        super(element);
    }

    handleClick() {
        console.log('AppComponent', this.element);
        this.counter++;
    }

    ngAfterViewInit() {
        // this.cdr.detach();
        // setTimeout(() => {
        //     this.cdr.reattach();
        // }, 10000);
    }
}

import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
} from '@angular/core';
import { ColorizeComponent } from '../colorize/colorize.component';

@Component({
    selector: 'app-logo',
    standalone: true,
    imports: [ColorizeComponent],
    templateUrl: './logo.component.html',
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent extends ColorizeComponent {
    constructor(element: ElementRef, private cdr: ChangeDetectorRef) {
        super(element);

        // setTimeout(() => {
        //     this.cdr.detectChanges();
        // }, 3000);
    }

    handleClick() {
        console.log('LogoComponent', this.element);
    }
}

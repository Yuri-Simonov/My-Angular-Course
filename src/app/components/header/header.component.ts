import { LogoComponent } from './../logo/logo.component';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    Input,
} from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { ColorizeComponent } from '../colorize/colorize.component';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [LogoComponent, NavigationComponent],
    templateUrl: './header.component.html',
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent extends ColorizeComponent {
    @Input() counter: number = 0;

    constructor(element: ElementRef, private cdr: ChangeDetectorRef) {
        super(element);
    }

    handleClick() {
        console.log('HeaderComponent', this.element);
        // this.cdr.detectChanges();
    }
}

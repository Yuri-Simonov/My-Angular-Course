import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    signal,
} from '@angular/core';
import { ArticlesComponent } from '../articles/articles.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ColorizeComponent } from '../colorize/colorize.component';

@Component({
    selector: 'app-main',
    standalone: true,
    imports: [ArticlesComponent, SidebarComponent, ColorizeComponent],
    templateUrl: './main.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent extends ColorizeComponent {
    signal = signal(0);

    constructor(element: ElementRef, private cdr: ChangeDetectorRef) {
        super(element);

        setTimeout(() => {
            this.signal.set(1);
        }, 3000);
    }

    handleClick() {
        console.log('MainComponent', this.element);
        // this.cdr.detectChanges();
    }
}

import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';
import { MarkForCheckTogglerService } from '../../services/mark-for-check-toggler.service';
import { ColorizeComponent } from '../colorize/colorize.component';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [ColorizeComponent],
    templateUrl: './sidebar.component.html',
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent extends ColorizeComponent {
    counter: number = 0;

    constructor(
        element: ElementRef,
        private markForCheckTogglerService: MarkForCheckTogglerService
    ) {
        super(element);
    }

    handleClick() {
        console.log('SidebarComponent', this.element);
        this.markForCheckTogglerService.toggle();
        this.counter++;
    }
}

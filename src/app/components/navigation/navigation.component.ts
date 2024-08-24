import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
} from '@angular/core';
import { ArticlesComponent } from '../articles/articles.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MarkForCheckTogglerService } from '../../services/mark-for-check-toggler.service';
import { ColorizeComponent } from '../colorize/colorize.component';

@Component({
    selector: 'app-navigation',
    standalone: true,
    imports: [ArticlesComponent, SidebarComponent, ColorizeComponent],
    templateUrl: './navigation.component.html',
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent extends ColorizeComponent {
    flag = false;

    constructor(
        element: ElementRef,
        private cdr: ChangeDetectorRef,
        private markForCheckTogglerService: MarkForCheckTogglerService
    ) {
        super(element);

        this.markForCheckTogglerService.flag$.subscribe((flag) => {
            // flag && this.cdr.markForCheck();
            // flag && this.cdr.detectChanges();
        });
    }

    handleClick() {
        console.log('NavigationComponent', this.element);
    }
}

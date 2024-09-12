import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
} from '@angular/core';
import { ChildComponent } from './components/child/child.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [ChildComponent],
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    name: string = 'Миша';

    constructor(private cdr: ChangeDetectorRef) {
        setTimeout(() => {
            this.name = 'Максим';
            this.cdr.markForCheck();
        }, 3000);
    }
}

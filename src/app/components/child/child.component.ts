import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
} from '@angular/core';
import { GreenComponent } from '../green/green.component';

@Component({
    selector: 'app-child',
    standalone: true,
    imports: [GreenComponent],
    templateUrl: './child.component.html',
    styleUrl: './child.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent {
    @Input() number!: number;

    constructor(private cdr: ChangeDetectorRef) {
        this.cdr.detach();
    }

    ngDoCheck() {
        console.log('ngDoCheck app-child');
    }

    ngAfterViewInit() {
        setTimeout(() => {
            // this.number = 100;
            // this.cdr.markForCheck();
            this.cdr.detectChanges();
        }, 5000);
        // this.number = 100;
        // this.cdr.detectChanges();
    }
}

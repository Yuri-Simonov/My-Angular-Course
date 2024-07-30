import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-child',
    standalone: true,
    imports: [],
    templateUrl: './child.component.html',
    styleUrl: './child.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent {
    @Input() number!: number;

    ngDoCheck() {
        console.log('ngDoCheck app-child');
    }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-green',
    standalone: true,
    imports: [],
    templateUrl: './green.component.html',
    styleUrl: './green.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GreenComponent {
    color: string = 'green';

    ngAfterViewInit() {
        this.color = 'pink';
    }
}

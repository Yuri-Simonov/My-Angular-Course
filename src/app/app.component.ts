import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChildComponent } from './components/child/child.component';
import { AsyncPipe } from '@angular/common';
import { of } from 'rxjs';

@Component({
    selector: 'app-root',
    imports: [AsyncPipe],
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    // standalone: false,
})
export class AppComponent {
    data = {
        one: {
            two: {
                three: {
                    title: 'Hello world',
                },
            },
        },
    };

    asyncData$ = of(this.data);

    constructor() {}
}

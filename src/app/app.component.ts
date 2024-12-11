import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChildComponent } from './components/child/child.component';

@Component({
    selector: 'app-root',
    imports: [ChildComponent],
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}

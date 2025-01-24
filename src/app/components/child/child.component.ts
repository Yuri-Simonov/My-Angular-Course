import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent {}

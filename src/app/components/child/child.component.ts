import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RandomService } from '../../services/random.service';
import { ChildDirective } from '../../directives/child.directive';
import { ParentDirective } from '../../directives/parent.directive';
import { RedComponent } from '../red/red.component';
import { GreenComponent } from '../green/green.component';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrl: './child.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RedComponent, GreenComponent],
    // providers: [RandomService],
    // viewProviders: [RandomService],
})
export class ChildComponent {
    constructor(private randomService: RandomService) {
        console.log('ChildComponent', this.randomService);
    }
}

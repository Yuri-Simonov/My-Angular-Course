import {
    ChangeDetectionStrategy,
    Component,
    Optional,
    Self,
    SkipSelf,
} from '@angular/core';
import { RandomService } from '../../services/random.service';
import { ChildDirective } from '../../directives/child.directive';
import { ParentDirective } from '../../directives/parent.directive';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrl: './child.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ChildDirective, ParentDirective],
    providers: [RandomService],
})
export class ChildComponent {
    constructor(
        @SkipSelf() @Optional() private randomService: RandomService,
        @Self() @Optional() private localRandomService: RandomService,
        @SkipSelf() @Optional() private globalRandomService: RandomService
    ) {
        // if (this.randomService) {
        //     console.log('randomService', this.randomService.getRandomNumber());
        // }
        // console.log('randomService', this.randomService);
        // console.log('localRandomService', this.localRandomService);
        // console.log('globalRandomService', this.globalRandomService);
    }
}

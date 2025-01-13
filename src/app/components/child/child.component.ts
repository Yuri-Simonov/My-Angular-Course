import {
    Attribute,
    ChangeDetectionStrategy,
    Component,
    HostAttributeToken,
    inject,
    Inject,
} from '@angular/core';
import { RandomService } from '../../services/random.service';
import { TOKEN } from '../../shared/tokens/tokens';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{ provide: TOKEN, useValue: 123 }],
})
export class ChildComponent {
    randomService1 = inject(RandomService, { optional: true, skipSelf: true });
    token1 = inject(TOKEN);
    token3: number;
    name1 = inject(new HostAttributeToken('name'), { optional: true });

    constructor(
        private randomService2: RandomService,
        @Inject(TOKEN) private token2: number,
        @Attribute('name') public name2: string
    ) {
        this.token3 = inject(TOKEN);

        console.log('ChildComponent 1', this.randomService1);
        console.log('ChildComponent 2', this.randomService2);

        console.log('token 1', this.token1);
        console.log('token 2', this.token2);
        console.log('token 3', this.token3);

        console.log('name 1', this.name1);
        console.log('name 2', this.name2);
    }

    ngOnInit() {
        // this.token3 = inject(TOKEN);
    }
}

import { Component, Inject } from '@angular/core';
import { TOKEN } from '../../shared/tokens/tokens';

@Component({
    selector: 'app-child',
    imports: [],
    templateUrl: './child.component.html',
    styleUrl: './child.component.scss',
    providers: [{ provide: TOKEN, useValue: 123 }],
})
export class ChildComponent {
    constructor(@Inject(TOKEN) private token: number) {
        // console.log('this.token', this.token);
    }
}

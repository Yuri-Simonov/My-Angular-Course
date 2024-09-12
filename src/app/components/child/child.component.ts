import { Attribute, Component, Input } from '@angular/core';

@Component({
    selector: 'app-child',
    standalone: true,
    imports: [],
    templateUrl: './child.component.html',
    styleUrl: './child.component.scss',
})
export class ChildComponent {
    // @Input() name: string;

    constructor(@Attribute('name') public name: string) {
        console.log('this.name', this.name);
    }
}

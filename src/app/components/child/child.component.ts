import { Component } from '@angular/core';
import { RandomService } from '../../services/random.service';

@Component({
    selector: 'app-child',
    imports: [],
    templateUrl: './child.component.html',
    styleUrl: './child.component.scss',
    providers: [RandomService]
})
export class ChildComponent {
    constructor(private randomService: RandomService) {
        console.log(this.randomService.getRandomNumber());
    }
}

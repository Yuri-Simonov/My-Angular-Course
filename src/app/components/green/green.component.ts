import { Component } from '@angular/core';
import { RandomService } from '../../services/random.service';

@Component({
    selector: 'app-green',
    imports: [],
    templateUrl: './green.component.html',
    styleUrl: './green.component.scss',
})
export class GreenComponent {
    constructor(private randomService: RandomService) {
        console.log('GreenComponent', this.randomService);
    }
}

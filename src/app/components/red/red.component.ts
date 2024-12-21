import { Component } from '@angular/core';
import { RandomService } from '../../services/random.service';

@Component({
    selector: 'app-red',
    imports: [],
    templateUrl: './red.component.html',
    styleUrl: './red.component.scss',
    viewProviders: [RandomService],
})
export class RedComponent {
    constructor(private randomService: RandomService) {
        console.log('RedComponent', this.randomService);
    }
}

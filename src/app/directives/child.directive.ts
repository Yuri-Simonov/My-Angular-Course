import { Directive, Host, Optional } from '@angular/core';
import { RandomService } from '../services/random.service';

@Directive({
    selector: '[appChild]',
})
export class ChildDirective {
    constructor(@Host() @Optional() private randomService: RandomService) {
        // console.log('ChildDirective', this.randomService);
    }
}

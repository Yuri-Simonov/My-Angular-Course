import { RandomService } from './../services/random.service';
import { Directive, Host, Optional } from '@angular/core';

@Directive({
    selector: '[appParent]',
    // providers: [RandomService],
})
export class ParentDirective {
    constructor(@Host() @Optional() private randomService: RandomService) {
        // console.log('ParentDirective', this.randomService);
    }
}

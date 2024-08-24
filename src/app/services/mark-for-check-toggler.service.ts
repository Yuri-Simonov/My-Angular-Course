import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class MarkForCheckTogglerService {
    flag$ = new BehaviorSubject<boolean>(false);

    toggle() {
        this.flag$.next(!this.flag$.value);
    }
}

import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class UserService {
    getUsers() {
        return of([
            {
                name: 'Вася',
            },
            {
                name: 'Маша',
            },
            {
                name: 'Катя',
            },
        ]);
    }
}

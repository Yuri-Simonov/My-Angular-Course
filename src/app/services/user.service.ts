import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable()
export class BasicService {
    private httpInject = inject(HttpClient);

    constructor() {}
    // constructor(private http: HttpClient) {}
}

@Injectable()
export class UserService extends BasicService {
    constructor() {
        super();
    }
    // constructor(http: HttpClient) {
    //     super(http);
    // }
}

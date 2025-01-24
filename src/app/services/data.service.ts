import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor(private http: HttpClient) {
        // console.log('DataService');
    }

    getData() {
        return this.http.get(
            'https://api.coindesk.com/v1/bpi/currentprice.json'
        );
    }
}

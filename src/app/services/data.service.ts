import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    private _data: string[] = ['One', 'Two', 'Three'];

    constructor(private http: HttpClient) {}

    getData() {
        return this._data;
    }

    getUsers() {
        return this.http.get('https://jsonplaceholder.typicode.com/users');
    }
}

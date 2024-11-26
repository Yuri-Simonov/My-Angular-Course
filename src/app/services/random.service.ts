import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class RandomService {
    private _randomNumber: number;

    constructor() {
        this._randomNumber = Math.floor(Math.random() * 100);
    }

    getRandomNumber() {
        return this._randomNumber;
    }
}

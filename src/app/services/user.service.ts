import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { map, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private baseUserUrl = 'http://localhost:4201/users';

    constructor(private http: HttpClient) {}

    createUser(user: User): Observable<User> {
        return this.http.post<User>(this.baseUserUrl, user);
    }

    checkEmail(email: string): Observable<boolean> {
        return this.http
            .get<User[]>(`${this.baseUserUrl}?email=${email}`)
            .pipe(map((users) => users.length > 0));
    }
}

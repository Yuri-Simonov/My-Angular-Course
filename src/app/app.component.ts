import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChildComponent } from './components/child/child.component';
import { AsyncPipe } from '@angular/common';
import { DataService } from './services/data.service';
import { Observable, of } from 'rxjs';
import {
    HttpClient,
    HttpEvent,
    HttpHandler,
    HttpRequest,
    HttpResponse,
} from '@angular/common/http';
import { RandomService } from './services/random.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [ChildComponent, AsyncPipe],
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [RandomService],
})
export class AppComponent {
    users$: Observable<any>;

    constructor(
        private dataService: DataService,
        private randomService: RandomService
    ) {
        this.users$ = this.dataService.getUsers();
        console.log(this.randomService.getRandomNumber());
    }

    // dataService: DataService;

    // constructor() {
    //     this.dataService = new DataService(new HttpClient(new Handler()));
    //     this.users$ = this.dataService.getUsers();
    // }
}

// class Handler implements HttpHandler {
//     handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
//         // Имитация ответа сервера с данными пользователей
//         const fakeResponse = new HttpResponse({
//             status: 200,
//             body: [{ name: 'Вася' }, { name: 'Петя' }],
//         });
//         // Возвращаем Observable с нашим фейковым ответом
//         return of(fakeResponse);
//     }
// }

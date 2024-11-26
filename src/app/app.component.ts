import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Inject,
} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';
import { ChildComponent } from './components/child/child.component';
import { UserService } from './services/user.service';
import {
    ADMIN_RANDOM_SERVICE_TOKEN,
    TOKEN,
    USER_RANDOM_SERVICE_TOKEN,
} from './shared/tokens/tokens';
import { RandomService } from './services/random.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    imports: [AsyncPipe, ChildComponent],
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        DataService,
        // строка
        { provide: TOKEN, useValue: 'Какие-то строковые данные', multi: true },
        // число
        { provide: TOKEN, useValue: 1, multi: true },
        // булево
        { provide: TOKEN, useValue: true, multi: true },
        // объект
        { provide: TOKEN, useValue: { name: 'Вася' }, multi: true },
        // массив
        { provide: TOKEN, useValue: [1, 2, 3], multi: true },
        // функция
        {
            provide: TOKEN,
            useValue: () => console.log('Какая-то логика внутри функции'),
            multi: true,
        },
        // и т.д.
    ],
})
export class AppComponent {
    users$: Observable<any>;
    // dataService3 = inject(DataService);

    constructor(
        private dataService: DataService,
        // @Inject(DataService) private dataService2: DataService,
        @Inject(TOKEN) private token: string // @Inject(USER_RANDOM_SERVICE_TOKEN) // private userRandomService: RandomService, // @Inject(ADMIN_RANDOM_SERVICE_TOKEN) // private adminRandomService: RandomService
    ) {
        this.users$ = this.dataService.getUsers();
        console.log('this.token', this.token);
        // console.log('this.dataService', this.dataService);
        // console.log('this.dataService2', this.dataService2);
        // console.log('this.dataService3', this.dataService3);
        // console.log('this.userRandomService', this.userRandomService);
        // console.log('this.adminRandomService', this.adminRandomService);
    }
}

import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
} from '@angular/core';
import { ChildComponent } from './components/child/child.component';
import { AsyncPipe } from '@angular/common';
import { DataService } from './services/data.service';
import { delay, Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [ChildComponent, AsyncPipe],
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    // private _dataService: DataService;

    // constructor(dataService: DataService) {
    //     this._dataService = dataService;
    //     console.log(this._dataService.getData());
    // }

    users: any;
    users$: Observable<any>;

    constructor(
        private dataService: DataService,
        private cdr: ChangeDetectorRef
    ) {
        console.log(this.dataService.getData());

        this.dataService.getUsers().subscribe((users) => {
            console.log(users);
            this.users = users;
            // this.cdr.detectChanges();
        });

        this.users$ = this.dataService.getUsers().pipe(delay(2000));
    }

    ngAfterViewInit() {
        console.log('this.users', this.users);
    }
}

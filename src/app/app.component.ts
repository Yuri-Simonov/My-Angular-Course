import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './components/child/child.component';
import { Observable, from, fromEvent, interval, map, of } from 'rxjs';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, ChildComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    numberObservable$: Observable<number> = new Observable((sub) => {
        sub.next(1);
        sub.next(2);
        sub.next(3);
        sub.next(4);
        sub.next(5);
        sub.complete();
    });

    ngOnInit() {
        this.numberObservable$.subscribe(console.log);

        console.log('==============');

        of(1, 2, 3, 4, 5)
            .pipe(map((item) => item * 10))
            .subscribe(console.log);

        console.log('==============');

        from([1, 2, 3, 4, 5])
            .pipe(map((item) => item * 10))
            .subscribe(console.log);

        console.log('==============');

        fromEvent(document, 'click').subscribe(console.log);

        console.log('==============');

        interval(1000).subscribe(console.log);
    }
}

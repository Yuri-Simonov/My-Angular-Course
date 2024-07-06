import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './components/child/child.component';
import { interval, map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, ChildComponent, AsyncPipe],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    exampleObservable$!: Observable<any>;
    examplePromise$!: Promise<any>;

    ngOnInit() {
        this.exampleObservable$ = interval(1000).pipe(
            map((value) => ({
                previousValue: value - 1,
                currentValue: value,
                nextValue: value + 1,
            }))
        );

        this.examplePromise$ = new Promise((resolve) => {
            setTimeout(() => {
                resolve('Promise успешно выполнился');
            }, 3000);
        });
    }
}

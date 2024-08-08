import { interval } from 'rxjs';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './components/child/child.component';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, ChildComponent, AsyncPipe],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    title: string = 'Hello, world!';
    interval$ = interval(1000);

    constructor(private cdr: ChangeDetectorRef) {
        // this.cdr.detach();
    }

    ngDoCheck() {
        console.log('ngDoCheck app-root');
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit app-root');

        setTimeout(() => {
            this.title = 'Привет, мир!';
            // this.cdr.detach();
        }, 3000);
        setTimeout(() => {
            // this.cdr.reattach();
        }, 6000);
    }

    handleClick() {
        console.log('handleClick');
    }
}

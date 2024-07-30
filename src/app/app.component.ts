import { interval } from 'rxjs';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './components/child/child.component';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, ChildComponent, AsyncPipe],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    // changeDetection: ChangeDetectionStrategy.Default,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    title: string = 'Hello, world!';
    interval$ = interval(1000);
    signal = signal(0);

    ngDoCheck() {
        console.log('ngDoCheck app-root');
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit app-root');

        setTimeout(() => {
            this.title = 'Привет, мир!';
            this.signal.set(1);
        }, 3000);
    }

    handleClick() {
        console.log('handleClick');
    }
}

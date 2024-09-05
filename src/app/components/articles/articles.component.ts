import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Input,
} from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ColorizeComponent } from '../colorize/colorize.component';

@Component({
    selector: 'app-articles',
    standalone: true,
    imports: [AsyncPipe, ColorizeComponent],
    templateUrl: './articles.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesComponent extends ColorizeComponent {
    interval$: Observable<number> = interval(2000).pipe(
        map((value) => value + 1)
    );

    @Input() value: number = 0;

    constructor(element: ElementRef) {
        super(element);
    }

    handleClick() {
        console.log('ArticlesComponent', this.element);
    }
}

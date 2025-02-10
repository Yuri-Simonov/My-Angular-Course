import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    inject,
    ViewChild,
} from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [FormsModule],
})
export class AppComponent {
    username: string = '';

    @ViewChild('exampleForm') exampleForm: NgForm;
    @ViewChild('exampleInput') exampleInput: NgModel;

    private cdr = inject(ChangeDetectorRef);

    ngOnInit() {
        setTimeout(() => {
            this.username = 'John Doe';
            this.cdr.markForCheck();
        }, 3000);
    }

    ngDoCheck() {
        // console.log('this.username', this.username);
    }

    ngAfterViewInit() {
        this.exampleForm.valueChanges?.subscribe((value) => {
            console.log('exampleForm value', value);
        });
        this.exampleInput.valueChanges?.subscribe((value) => {
            console.log('exampleInput value', value);
        });
    }

    onSubmit(formValue: NgForm) {
        console.log('formValue', formValue);
    }
}

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomInputComponent } from './components/custom-input/custom-input.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [FormsModule, ReactiveFormsModule, CustomInputComponent],
})
export class AppComponent {
    private formBuilder = inject(FormBuilder);

    reactiveForm = this.formBuilder.group({
        firstInput: ['Первый инпут'],
        secondInput: ['Второй инпут'],
    });

    onSubmit(value?: any) {
        console.log('value', value);
    }
}

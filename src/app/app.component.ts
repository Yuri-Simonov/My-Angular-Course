import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { requiredValidator, minLengthValidator } from './validators/sync';
import { asyncRequiredValidator } from './validators/async';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ReactiveFormsModule],
})
export class AppComponent {
    // inputField = new FormControl('Значение по умолчанию', [Validators.required, Validators.minLength(3)]);
    // inputField = new FormControl('Значение по умолчанию', [requiredValidator, minLengthValidator(3)]);
    // inputField = new FormControl('Значение по умолчанию', null, asyncRequiredValidator);
    inputField = new FormControl('Значение по умолчанию', {
        validators: [Validators.minLength(3), Validators.required],
        asyncValidators: asyncRequiredValidator,
    });

    exampleForm = new FormGroup({
        name: new FormControl('Вася'),
        age: new FormControl(20),
        address: new FormGroup({
            street: new FormControl('Улица Ленина'),
            city: new FormControl('Москва'),
        }),
        pets: new FormArray([new FormControl('Мурзик'), new FormControl('Барсик')]),
    });

    exampleFormFB = this.fb.group({
        name: ['Вася', Validators.required, asyncRequiredValidator],
        age: [20, { validators: [Validators.required, Validators.min(18)] }],
        address: this.fb.group({
            street: ['Улица Ленина'],
            city: ['Москва'],
        }),
        pets: this.fb.array(['Мурзик', this.fb.control('Барсик')]),
    });

    get pets() {
        return this.exampleFormFB.get('pets') as FormArray;
    }

    addPet() {
        this.pets.push(this.fb.control(''));
    }

    constructor(private fb: FormBuilder) {}

    ngDoCheck() {
        // console.log(this.inputField.errors);
        console.log('pets', this.pets.value);
    }
}

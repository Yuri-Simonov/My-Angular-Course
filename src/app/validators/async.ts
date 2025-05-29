import { AbstractControl } from '@angular/forms';
import { of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

export const asyncRequiredValidator = (control: AbstractControl) => {
    return of(control.value).pipe(
        delay(2000),
        map((value) => (value ? null : { required: true })),
    );
};

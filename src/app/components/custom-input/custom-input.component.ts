import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-custom-input',
    template: `<input
        type="text"
        [value]="inputValue"
        (input)="onInput($event)"
        (blur)="onTouched()"
        [disabled]="isDisabled"
    />`,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: CustomInputComponent,
            multi: true,
        },
    ],
})
export class CustomInputComponent implements ControlValueAccessor {
    inputValue: string = '';
    isDisabled: boolean;

    onChange: (value: string) => void;
    onTouched: () => void;

    writeValue(value: string): void {
        this.inputValue = value;
    }
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }

    onInput(event: Event): void {
        const input = event.target as HTMLInputElement;
        this.inputValue = input.value;
        this.onChange(this.inputValue);
    }
}

import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    signal,
    ViewChild,
} from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { User } from './interfaces/user';
import { UserService } from './services/user.service';
import { NotificationService } from './services/notification.service';
import {
    catchError,
    combineLatestWith,
    debounceTime,
    distinctUntilChanged,
    EMPTY,
    switchMap,
    tap,
} from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [FormsModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    initialUser: User = {
        name: '',
        lastName: '',
        email: '',
        gender: 'male',
        country: 'ru',
        comment: '',
        agree: true,
    };
    user: User = structuredClone(this.initialUser);

    enableSubmit = signal(false);

    @ViewChild('emailRef') emailRef: NgModel;
    @ViewChild('userForm') userForm: NgForm;

    constructor(
        private userService: UserService,
        private notificationService: NotificationService,
        private destroyRef: DestroyRef,
    ) {}

    ngAfterViewInit() {
        this.emailRef.valueChanges
            ?.pipe(
                tap(() => {
                    this.enableSubmit.set(false);
                }),
                debounceTime(1000),
                switchMap((email) => {
                    if (this.emailRef.invalid) {
                        return EMPTY;
                    }

                    return this.userService.checkEmail(email).pipe(
                        tap((emailTaken) => {
                            if (emailTaken) {
                                this.emailRef.control.setErrors({
                                    emailTaken: true,
                                });
                            } else if (this.emailRef.hasError('emailTaken')) {
                                delete this.emailRef.errors?.['emailTaken'];
                            }
                        }),
                    );
                }),
                catchError(() => {
                    this.notificationService.error(
                        'Сервер временно недоступен. Попробуйте позже',
                    );
                    return EMPTY;
                }),
                combineLatestWith(this.userForm.statusChanges!),
                distinctUntilChanged(
                    (prev, curr) =>
                        JSON.stringify(prev) === JSON.stringify(curr),
                ),
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe(([emailTaken, formStatus]) => {
                this.enableSubmit.set(!emailTaken && formStatus === 'VALID');
            });
    }

    checkFieldStatus(field: NgModel) {
        return field.invalid && (field.dirty || field.touched);
    }

    onSubmit(userForm: NgForm) {
		if (!this.enableSubmit()) return;
		
		this.userService.createUser(userForm.value).subscribe({
			next: () => {
				this.notificationService.success(
					'Пользователь успешно создан',
				);
				userForm.resetForm(this.initialUser);
			},
			error: () => {
				this.notificationService.error(
					'Не удалось создать пользователя. Попробуйте позже',
				);
			},
		});
    }
}

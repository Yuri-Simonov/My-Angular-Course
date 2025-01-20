import { HttpInterceptorFn } from '@angular/common/http';
import { catchError } from 'rxjs';

export const exampleInterceptor: HttpInterceptorFn = (req, next) => {
    console.log('req', req);

    req = req.clone({
        setHeaders: {
            Authorization: 'Bearer some-token',
        },
    });

    return next(req).pipe(
        catchError((error) => {
            alert(`Ресурс не найден. Статус ${error.status}`);
            return [];
        })
    );
};

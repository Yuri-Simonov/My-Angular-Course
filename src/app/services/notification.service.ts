import { Injectable } from '@angular/core';
import { IndividualConfig, ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root',
})
export class NotificationService {
    private config: Partial<IndividualConfig> = {
        timeOut: 3000,
        positionClass: 'toast-bottom-center',
        progressAnimation: 'decreasing',
        progressBar: true,
    };

    constructor(private toastr: ToastrService) {}

    success(title: string, message: string = ''): void {
        this.toastr.success(message, title, this.config);
    }

    error(title: string, message: string = ''): void {
        this.toastr.error(message, title, this.config);
    }
}

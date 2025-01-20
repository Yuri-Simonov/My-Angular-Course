import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    private dataService = inject(DataService);

    ngOnInit() {
        this.dataService.getData().subscribe((data) => console.log(data));
    }
}

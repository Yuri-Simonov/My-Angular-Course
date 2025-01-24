import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    // providers: [DataService],
})
export class AppComponent {
    // private dataService = inject(DataService);
    // constructor(private dataService: DataService) {}
}

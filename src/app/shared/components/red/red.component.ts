import { Component } from '@angular/core';
import { BlueComponent } from '../blue/blue.component';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrl: './red.component.scss',
  standalone: true,
  imports: [BlueComponent],
})
export class RedComponent {}

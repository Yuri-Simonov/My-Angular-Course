import { Component } from '@angular/core';
import { BlueComponent } from '../blue/blue.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrl: './red.component.scss',
  standalone: true,
  imports: [CommonModule],
})
export class RedComponent {}

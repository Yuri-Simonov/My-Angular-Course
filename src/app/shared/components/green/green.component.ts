import { Component } from '@angular/core';
import { RedComponent } from '../red/red.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-green',
  templateUrl: './green.component.html',
  styleUrl: './green.component.scss',
  standalone: true,
  imports: [RedComponent, CommonModule],
})
export class GreenComponent {}

import { Component, ViewEncapsulation } from '@angular/core';
import { RedComponent } from '../red/red.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-green',
  templateUrl: './green.component.html',
  styleUrl: './green.component.scss',
  standalone: true,
  //   imports: [RedComponent, CommonModule],
  encapsulation: ViewEncapsulation.None,
})
export class GreenComponent {}

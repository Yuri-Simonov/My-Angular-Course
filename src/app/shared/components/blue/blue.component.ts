import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-blue',
  templateUrl: './blue.component.html',
  styleUrl: './blue.component.scss',
  standalone: true,
  imports: [NgClass],
})
export class BlueComponent {}

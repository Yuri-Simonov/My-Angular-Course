import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondComponent } from './second.component';
import { FirstModule } from '../first/first.module';

@NgModule({
  declarations: [SecondComponent],
  imports: [CommonModule, FirstModule],
})
export class SecondModule {}

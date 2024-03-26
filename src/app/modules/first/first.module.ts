import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first.component';

@NgModule({
  declarations: [FirstComponent],
  imports: [CommonModule],
  exports: [FirstComponent],
})
export class FirstModule {}

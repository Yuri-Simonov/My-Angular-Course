import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first.component';
import { BlueComponent } from '../../shared/components/blue/blue.component';
import { SecondModule } from '../second/second.module';

@NgModule({
  declarations: [FirstComponent],
  imports: [CommonModule, BlueComponent],
  exports: [FirstComponent],
})
export class FirstModule {}

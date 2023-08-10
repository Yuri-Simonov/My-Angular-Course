import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutText',
})
export class CutTextPipe implements PipeTransform {
  transform(value: string, maxLength = 100): string {
    if (value.length > maxLength) return value.substring(0, maxLength) + '...';
    else return value;
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uiPipes',
})
export class UiPipesPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}

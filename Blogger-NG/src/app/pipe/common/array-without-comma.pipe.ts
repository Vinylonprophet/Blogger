import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayWithoutComma'
})
export class ArrayWithoutCommaPipe implements PipeTransform {

  transform(array: any, ...args: unknown[]): string {
    return array.join(' ')
  }

}

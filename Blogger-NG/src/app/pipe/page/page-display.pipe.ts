import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pageDisplay'
})
export class PageDisplayPipe implements PipeTransform {

  transform(currentPage: any, ...args: unknown[]): any {
    if (typeof currentPage === 'number') {
      return ++currentPage;
    } else {
      return currentPage
    }
  }

}

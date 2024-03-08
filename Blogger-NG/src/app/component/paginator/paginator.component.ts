import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnChanges {
  @Input('totalPage') totalPage: number = 0;
  @Input('pageArray') pageArray: any = [];
  @Input('currentPage') currentPage: number = 0;
  @Output() next = new EventEmitter();
  @Output() previous = new EventEmitter();
  @Output() navTo = new EventEmitter();
  prePageArray: any = [];

  pageElement = document.getElementsByClassName('list-number');
  activePageElement = document.getElementsByClassName('active-page');

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes['currentPage'] && this.prePageArray != false) {
    //   this.isEllipsis();
    // }
    this.isEllipsis();
  }

  nextPage() {
    this.currentPage++;
    this.next.emit(this.currentPage);
  }

  prePage() {
    this.currentPage--;
    this.previous.emit(this.currentPage);
  }

  toPage(event: Event) {
    this.currentPage = Number((event.target as HTMLElement).innerText) - 1;
    this.navTo.emit(this.currentPage);
  }

  isEllipsis() {
    this.prePageArray = JSON.parse(JSON.stringify(this.pageArray));
    this.pageArray = JSON.parse(JSON.stringify(this.prePageArray));
    if (this.currentPage === 0 && this.prePageArray.length >= 7) {
      this.pageArray.splice(3, this.pageArray.length - 4, '...')
    } else if (this.prePageArray.length >= 7) {
      let arrayIndex = this.pageArray.indexOf(this.currentPage);
      if (arrayIndex - 2 >= 0) {
        this.pageArray.splice(1, arrayIndex - 2, '...');
      };
      arrayIndex = this.pageArray.indexOf(this.currentPage);
      if (this.pageArray.length - 2 > arrayIndex) {
        this.pageArray.splice(arrayIndex + 2, this.pageArray.length - arrayIndex - 3, '...');
      }
    }
  }
}

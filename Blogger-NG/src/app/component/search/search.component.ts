import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, OnChanges, SimpleChanges, ChangeDetectorRef, OnInit, ViewChildren, QueryList, OnDestroy } from '@angular/core';
import { debounceTime, from, fromEvent } from 'rxjs';
import { SearchService } from 'src/app/service/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("search") search!: ElementRef<HTMLInputElement>;
  @Output() closing = new EventEmitter();

  filterOption: any = [
    {
      classify: 'Parts',
      options: [
        'Article',
        'Video',
        'Project'
      ]
    },
    {
      classify: 'Tags',
      options: [
        'Post',
        'Page',
        'Chapter',
        'Post',
        'Page',
        'Chapter',
        'Post',
        'Page',
        'Chapter',
        'Post',
        'Page',
        'Chapter'
      ]
    }
  ]

  searchResult: any = []

  constructor(private changeDetectorRef: ChangeDetectorRef, private searchService: SearchService) { }

  ngOnInit(): void {
    document.body.style.overflow = 'hidden';
    this.searchService.postSearch().subscribe((result: any) => {
      this.searchResult = result
    });
  }

  ngAfterViewInit(): void {
    fromEvent(this.search?.nativeElement, 'input').pipe(
      debounceTime(500)
    ).subscribe(res => {
      const search = (res?.target as HTMLInputElement).value;
      this.searchService.postSearch().subscribe((result: any) => {
        this.searchResult = result
        console.log("vinylon: ", search);
      });
    });

    // this.checkboxes.map(
    //   checkbox => fromEvent(checkbox.nativeElement, 'change')
    // ).forEach((res: any) => {
    //   console.log("checkbox checked: ", res);
    // })
  }

  ngOnDestroy(): void {
    document.body.style.overflow = 'auto';
  }

  close() {
    this.closing.emit();
  }
}

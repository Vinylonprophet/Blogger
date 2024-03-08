import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { ArticleService } from 'src/app/service/article.service';
import { ClassifyService } from 'src/app/service/classify.service';

@Component({
  selector: 'app-article-classify',
  templateUrl: './article-classify.component.html',
  styleUrls: ['./article-classify.component.scss']
})
export class ArticleClassifyComponent implements OnInit, AfterViewInit {
  @ViewChild("selectTags") selectTags!: ElementRef<HTMLInputElement>;
  @ViewChild("selectDateSort") selectDateSort!: ElementRef;
  @Input('totalArticle') totalArticle: number = 0;
  @Output() emitTag = new EventEmitter();
  @Output() emitDateSort = new EventEmitter();
  @Output() emitRefresh = new EventEmitter();

  tags: any = [];
  datesorts: any = [];
  selectedTag: string = "All Tags";
  selectedsort: string = "DESC";

  isSort: Boolean = false;

  constructor(private articleService: ArticleService, private classifyService: ClassifyService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.classifyService.getClassify().subscribe((classify: any) => {
      this.tags = classify.data[0].tags;
      this.datesorts = classify.data[0].datesorts;
    })
  }

  ngAfterViewInit(): void {
    // const currentPart = String(this.route.routeConfig?.path?.substring(0, this.route.routeConfig?.path.indexOf('/')));
    fromEvent(this.selectTags?.nativeElement, 'change').subscribe((select: any) => {
      this.selectedTag = select.target.value;
      this.emitTag.emit(this.selectedTag);
      this.emitRefresh.emit(true);
    });

    fromEvent(this.selectDateSort?.nativeElement, 'change').subscribe((select: any) => {
      this.isSort = !this.isSort;
      this.selectedsort = select.target.value;
      this.emitDateSort.emit(this.selectedsort);
      this.emitRefresh.emit(true);
    });
  }
}

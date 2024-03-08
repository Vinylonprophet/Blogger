import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { ArticleService } from 'src/app/service/article.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-article-introduction',
  templateUrl: './article-introduction.component.html',
  styleUrls: ['./article-introduction.component.scss']
})
export class ArticleIntroductionComponent implements OnInit, OnChanges, OnDestroy {
  @Output() emitArticles = new EventEmitter();
  @Input('isHomePage') isHomePage: Boolean = false;
  @Input('currentPart') currentPart: string = 'article';
  @Input('selectedTag') selectedTag: string = "All Tags";
  @Input('selectedDateSort') selectedDateSort: string = "DESC";
  @Input('refresh') refresh: boolean = false;
  navigationSubscription: Subscription | undefined
  currentArticle: number = 0;
  totalPage: number = 0;
  pageArray: any = [];
  currentPage: number = 1;
  perArticle: number = 7;
  totalArticle: number = 0;
  article: any[] = []
  shortArticle = [
    {},
    {},
    {},
    {},
    {},
  ]

  constructor(private route: ActivatedRoute, private router: Router, private articleService: ArticleService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedTag'] || changes['selectedDateSort']) {
      const currentPart = String(this.route.routeConfig?.path?.substring(0, this.route.routeConfig?.path.indexOf('/')));
      if (this.router.url === "/article/0" && this.refresh === true) {
        this.initPageArticle();
      } else {
        this.router.navigate([currentPart + '/' + 0]);
      }
    }
  }

  ngOnInit(): void {
    this.initPageArticle();

    // 为什么需要手动取消订阅呢
    this.navigationSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log("changed right?");
        this.initPageArticle();
      }
    });
  }

  ngOnDestroy(): void {
    this.navigationSubscription?.unsubscribe();
  }

  initPageArticle() {
    this.currentPage = Number(this.route.snapshot.paramMap.get('id'));
    this.articleService.getArticle(this.currentPage + 1, this.perArticle, this.selectedTag, this.selectedDateSort).subscribe((article: any) => {
      this.initPageInfo(article);
    })
  }

  initPageInfo(content: any) {
    this.article = content.data;
    this.totalArticle = content.msg;
    this.emitArticles.emit(this.totalArticle);
    this.currentArticle = this.totalArticle % this.perArticle;
    this.totalPage = Math.ceil(this.totalArticle / this.perArticle);
    this.pageArray = Array.from(Array(this.totalPage).keys());
    console.log("vinylon:", content)
  }

  updatePage(page: number) {
    this.router.navigate([this.currentPart + '/' + page]);
  }

  clickAlert() {
    window.alert("傻瓜，博主想休息一下，先不做这个function了")
  }

  toDetail(id: number) {
    if (this.currentPart === "article") {
      this.router.navigate(['/detail', id]);
      // this.router.navigate(['/detail', id], { skipLocationChange: true });
    }
  }
}

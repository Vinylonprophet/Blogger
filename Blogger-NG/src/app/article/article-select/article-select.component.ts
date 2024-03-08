import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-article-select',
  templateUrl: './article-select.component.html',
  styleUrls: ['./article-select.component.scss']
})
export class ArticleSelectComponent implements OnInit {

  isShadow: Boolean = false;

  popularArticles: any = []

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.getPopularArticles().subscribe((article: any) => {
      this.popularArticles = article.data;
    });
  }
}

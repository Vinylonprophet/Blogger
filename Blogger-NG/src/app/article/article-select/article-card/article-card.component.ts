import { Component, Input, OnInit } from '@angular/core';
import { PopularArticle } from 'src/app/types/article.type';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {
  @Input('isShadow') isShadow: Boolean = false;
  @Input('popularArticle') popularArticle: any = {}

  ngOnInit(): void {
  }
}

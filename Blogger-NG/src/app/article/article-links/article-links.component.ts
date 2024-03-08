import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-article-links',
  templateUrl: './article-links.component.html',
  styleUrls: ['./article-links.component.scss']
})
export class ArticleLinksComponent implements OnInit {
  sponsor: any = []

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.getSponsor().subscribe((sponsor: any) => {
      this.sponsor = sponsor.data;
    })
  }
}

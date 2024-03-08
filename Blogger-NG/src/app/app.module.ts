import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './bar/nav-bar/nav-bar.component';
import { ArticleSelectComponent } from './article/article-select/article-select.component';
import { HomeIndexComponent } from './home/home-index/home-index.component';
import { ArticleCardComponent } from './article/article-select/article-card/article-card.component';
import { ArticleIntroductionComponent } from './article/article-introduction/article-introduction.component';
import { FooterBarComponent } from './bar/footer-bar/footer-bar.component';
import { ArticleComponent } from './article/article.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginatorComponent } from './component/paginator/paginator.component';
import { PageDisplayPipe } from './pipe/page/page-display.pipe';
import { ArticleClassifyComponent } from './article/article-classify/article-classify.component';
import { MarkdownModule } from 'ngx-markdown';
import { ArticleDetailComponent } from './article/article-detail/article-detail.component';
import { ArticleLinksComponent } from './article/article-links/article-links.component';
import { SearchComponent } from './component/search/search.component';
import { ArrayWithoutCommaPipe } from './pipe/common/array-without-comma.pipe';
import { FormsModule } from '@angular/forms';
import { DateDisplayPipe } from './pipe/common/date-display.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ArticleSelectComponent,
    ArticleCardComponent,
    HomeIndexComponent,
    ArticleIntroductionComponent,
    FooterBarComponent,
    ArticleComponent,
    PaginatorComponent,
    PageDisplayPipe,
    ArticleClassifyComponent,
    ArticleDetailComponent,
    ArticleLinksComponent,
    SearchComponent,
    ArrayWithoutCommaPipe,
    DateDisplayPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeIndexComponent },
      { path: 'article/:id', component: ArticleComponent },
      { path: 'video/:id', component: ArticleComponent },
      { path: 'project/:id', component: ArticleComponent },
      // { path: 'detail/:id', component: ArticleDetailComponent },
      { path: 'detail/:id', component: ArticleDetailComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
    ]),
    MarkdownModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

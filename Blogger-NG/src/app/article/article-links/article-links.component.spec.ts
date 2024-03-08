import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleLinksComponent } from './article-links.component';

describe('ArticleLinksComponent', () => {
  let component: ArticleLinksComponent;
  let fixture: ComponentFixture<ArticleLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

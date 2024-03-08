import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleIntroductionComponent } from './article-introduction.component';

describe('ArticleIntroductionComponent', () => {
  let component: ArticleIntroductionComponent;
  let fixture: ComponentFixture<ArticleIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleIntroductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

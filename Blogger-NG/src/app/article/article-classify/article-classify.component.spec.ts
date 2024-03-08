import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleClassifyComponent } from './article-classify.component';

describe('ArticleClassifyComponent', () => {
  let component: ArticleClassifyComponent;
  let fixture: ComponentFixture<ArticleClassifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleClassifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleClassifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

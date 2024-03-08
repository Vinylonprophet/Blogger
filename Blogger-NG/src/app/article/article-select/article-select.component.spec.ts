import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSelectComponent } from './article-select.component';

describe('ArticleSelectComponent', () => {
  let component: ArticleSelectComponent;
  let fixture: ComponentFixture<ArticleSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

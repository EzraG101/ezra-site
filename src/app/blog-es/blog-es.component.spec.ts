import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogESComponent } from './blog-es.component';

describe('BlogESComponent', () => {
  let component: BlogESComponent;
  let fixture: ComponentFixture<BlogESComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogESComponent]
    });
    fixture = TestBed.createComponent(BlogESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

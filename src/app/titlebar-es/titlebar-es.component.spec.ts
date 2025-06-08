import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlebarESComponent } from './titlebar-es.component';

describe('TitlebarESComponent', () => {
  let component: TitlebarESComponent;
  let fixture: ComponentFixture<TitlebarESComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitlebarESComponent]
    });
    fixture = TestBed.createComponent(TitlebarESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

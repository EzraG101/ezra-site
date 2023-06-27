import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolletosComponent } from './folletos.component';

describe('FolletosComponent', () => {
  let component: FolletosComponent;
  let fixture: ComponentFixture<FolletosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolletosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FolletosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarESComponent } from './navbar-es.component';

describe('NavbarESComponent', () => {
  let component: NavbarESComponent;
  let fixture: ComponentFixture<NavbarESComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarESComponent]
    });
    fixture = TestBed.createComponent(NavbarESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

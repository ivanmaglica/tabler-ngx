import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarOverlapShellComponent } from './navbar-overlap.component';

describe('NavbarOverlapComponent', () => {
  let component: NavbarOverlapShellComponent;
  let fixture: ComponentFixture<NavbarOverlapShellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarOverlapShellComponent]
    });
    fixture = TestBed.createComponent(NavbarOverlapShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMenuDarkComponent } from './top-menu-dark.component';

describe('TopMenuDarkComponent', () => {
  let component: TopMenuDarkComponent;
  let fixture: ComponentFixture<TopMenuDarkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopMenuDarkComponent]
    });
    fixture = TestBed.createComponent(TopMenuDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

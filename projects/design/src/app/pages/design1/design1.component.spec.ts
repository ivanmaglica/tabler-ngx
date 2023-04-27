import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Design1Component } from './design1.component';

describe('Design1Component', () => {
  let component: Design1Component;
  let fixture: ComponentFixture<Design1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Design1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Design1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

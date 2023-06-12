import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalShellComponent } from './vertical-shell.component';

describe('VerticalShellComponent', () => {
  let component: VerticalShellComponent;
  let fixture: ComponentFixture<VerticalShellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerticalShellComponent]
    });
    fixture = TestBed.createComponent(VerticalShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

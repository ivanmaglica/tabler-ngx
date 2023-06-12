import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalTransparentShellComponent } from './vertical-transparent-shell.component';

describe('VerticalTransparentShellComponent', () => {
  let component: VerticalTransparentShellComponent;
  let fixture: ComponentFixture<VerticalTransparentShellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerticalTransparentShellComponent]
    });
    fixture = TestBed.createComponent(VerticalTransparentShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

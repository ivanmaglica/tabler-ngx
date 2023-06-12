import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyShellComponent } from './empty-shell.component';

describe('EmptyShellComponent', () => {
  let component: EmptyShellComponent;
  let fixture: ComponentFixture<EmptyShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

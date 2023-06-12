import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericDropdownComponent } from './generic-dropdown-card.component';

describe('GenericDropdownComponent', () => {
  let component: GenericDropdownComponent;
  let fixture: ComponentFixture<GenericDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenericDropdownComponent]
    });
    fixture = TestBed.createComponent(GenericDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

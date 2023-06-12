import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultTopMenuComponent } from './default-top-menu.component';

describe('DefaultTopMenuComponent', () => {
  let component: DefaultTopMenuComponent;
  let fixture: ComponentFixture<DefaultTopMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultTopMenuComponent]
    });
    fixture = TestBed.createComponent(DefaultTopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

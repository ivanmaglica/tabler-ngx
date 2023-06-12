import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftVerticalSidebarComponent } from './left-vertical-sidebar.component';

describe('LeftVerticalSidebarComponent', () => {
  let component: LeftVerticalSidebarComponent;
  let fixture: ComponentFixture<LeftVerticalSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftVerticalSidebarComponent]
    });
    fixture = TestBed.createComponent(LeftVerticalSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

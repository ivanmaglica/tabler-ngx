import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSubComponent } from './sidebar-sub.component';

describe('SidebarSubComponent', () => {
  let component: SidebarSubComponent;
  let fixture: ComponentFixture<SidebarSubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarSubComponent]
    });
    fixture = TestBed.createComponent(SidebarSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSubItemComponent } from './sidebar-sub-item.component';

describe('SidebarSubItemComponent', () => {
  let component: SidebarSubItemComponent;
  let fixture: ComponentFixture<SidebarSubItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarSubItemComponent]
    });
    fixture = TestBed.createComponent(SidebarSubItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

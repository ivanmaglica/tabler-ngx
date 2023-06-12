import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarDropEndComponent } from './sidebar-drop-end.component';

describe('SidebarDropEndComponent', () => {
  let component: SidebarDropEndComponent;
  let fixture: ComponentFixture<SidebarDropEndComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarDropEndComponent]
    });
    fixture = TestBed.createComponent(SidebarDropEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

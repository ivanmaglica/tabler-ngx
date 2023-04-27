import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveUsersWidgetComponent } from './active-users-widget.component';

describe('ActiveUsersWidgetComponent', () => {
  let component: ActiveUsersWidgetComponent;
  let fixture: ComponentFixture<ActiveUsersWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveUsersWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveUsersWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

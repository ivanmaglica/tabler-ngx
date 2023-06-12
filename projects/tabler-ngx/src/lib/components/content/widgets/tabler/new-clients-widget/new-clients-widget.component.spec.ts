import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewClientsWidgetComponent } from './new-clients-widget.component';

describe('NewClientsWidgetComponent', () => {
  let component: NewClientsWidgetComponent;
  let fixture: ComponentFixture<NewClientsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewClientsWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewClientsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

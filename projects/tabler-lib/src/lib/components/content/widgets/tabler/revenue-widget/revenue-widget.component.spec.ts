import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueWidgetComponent } from './revenue-widget.component';

describe('RevenueWidgetComponent', () => {
  let component: RevenueWidgetComponent;
  let fixture: ComponentFixture<RevenueWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevenueWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevenueWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

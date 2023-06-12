import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortInfoWidgetComponent } from './short-info-widget.component';

describe('ShortInfoWidgetComponent', () => {
  let component: ShortInfoWidgetComponent;
  let fixture: ComponentFixture<ShortInfoWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortInfoWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortInfoWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMenuLightComponent } from './top-menu-light.component';

describe('TopMenuLightComponent', () => {
  let component: TopMenuLightComponent;
  let fixture: ComponentFixture<TopMenuLightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopMenuLightComponent]
    });
    fixture = TestBed.createComponent(TopMenuLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

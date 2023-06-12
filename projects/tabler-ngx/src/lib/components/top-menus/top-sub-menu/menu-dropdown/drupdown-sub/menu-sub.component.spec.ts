import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionDrupdownSubComponent } from './action-drupdown-sub.component';

describe('ActionDrupdownSubComponent', () => {
  let component: ActionDrupdownSubComponent;
  let fixture: ComponentFixture<ActionDrupdownSubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionDrupdownSubComponent]
    });
    fixture = TestBed.createComponent(ActionDrupdownSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

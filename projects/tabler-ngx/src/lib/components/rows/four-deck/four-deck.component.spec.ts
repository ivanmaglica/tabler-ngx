import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourDeckComponent } from './four-deck.component';

describe('FourDeckComponent', () => {
  let component: FourDeckComponent;
  let fixture: ComponentFixture<FourDeckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FourDeckComponent]
    });
    fixture = TestBed.createComponent(FourDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

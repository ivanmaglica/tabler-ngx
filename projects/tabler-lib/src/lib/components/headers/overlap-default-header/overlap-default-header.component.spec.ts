import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlapDefaultHeaderComponent } from './overlap-default-header.component';

describe('OverlapDefaultHeaderComponent', () => {
  let component: OverlapDefaultHeaderComponent;
  let fixture: ComponentFixture<OverlapDefaultHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverlapDefaultHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverlapDefaultHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

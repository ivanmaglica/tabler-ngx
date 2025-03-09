import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultPageheaderComponent } from './default-page-header.component';

describe('DefaultPageheaderComponent', () => {
  let component: DefaultPageheaderComponent;
  let fixture: ComponentFixture<DefaultPageheaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultPageheaderComponent]
    });
    fixture = TestBed.createComponent(DefaultPageheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

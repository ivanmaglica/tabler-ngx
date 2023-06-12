import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultPageHeaderComponent } from './default-page-header.component';

describe('DefaultPageHeaderComponent', () => {
  let component: DefaultPageHeaderComponent;
  let fixture: ComponentFixture<DefaultPageHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultPageHeaderComponent]
    });
    fixture = TestBed.createComponent(DefaultPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

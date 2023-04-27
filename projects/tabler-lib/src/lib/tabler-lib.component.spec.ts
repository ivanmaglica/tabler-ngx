import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablerLibComponent } from './tabler-lib.component';

describe('TablerLibComponent', () => {
  let component: TablerLibComponent;
  let fixture: ComponentFixture<TablerLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablerLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablerLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

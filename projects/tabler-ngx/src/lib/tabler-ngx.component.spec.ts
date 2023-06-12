import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablerNgxComponent } from './tabler-ngx.component';

describe('TablerNgxComponent', () => {
  let component: TablerNgxComponent;
  let fixture: ComponentFixture<TablerNgxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablerNgxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablerNgxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

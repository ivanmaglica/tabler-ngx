import { TestBed } from '@angular/core/testing';

import { TablerLibService } from './tabler-lib.service';

describe('TablerLibService', () => {
  let service: TablerLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablerLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

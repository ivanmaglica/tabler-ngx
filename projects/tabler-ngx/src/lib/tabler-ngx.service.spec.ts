import { TestBed } from '@angular/core/testing';

import { TablerNgxService } from './tabler-ngx.service';

describe('TablerNgxService', () => {
  let service: TablerNgxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablerNgxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

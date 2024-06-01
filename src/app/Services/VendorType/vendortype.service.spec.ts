import { TestBed } from '@angular/core/testing';

import { VendortypeService } from './vendortype.service';

describe('VendortypeService', () => {
  let service: VendortypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendortypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { RegulationHistoryService } from './regulation-history.service';

describe('RegulationHistoryService', () => {
  let service: RegulationHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegulationHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

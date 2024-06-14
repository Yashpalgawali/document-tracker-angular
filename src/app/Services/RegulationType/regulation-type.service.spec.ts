import { TestBed } from '@angular/core/testing';

import { RegulationTypeService } from './regulation-type.service';

describe('RegulationTypeService', () => {
  let service: RegulationTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegulationTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

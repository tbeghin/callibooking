import { TestBed } from '@angular/core/testing';

import { ShowService } from './show.service';

describe('PerformanceService', () => {
  let service: ShowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

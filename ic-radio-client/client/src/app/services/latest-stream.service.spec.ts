import { TestBed } from '@angular/core/testing';

import { LatestStreamService } from './latest-stream.service';

describe('LatestStreamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LatestStreamService = TestBed.get(LatestStreamService);
    expect(service).toBeTruthy();
  });
});

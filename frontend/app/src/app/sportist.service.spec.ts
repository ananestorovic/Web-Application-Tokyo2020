import { TestBed } from '@angular/core/testing';

import { SportistService } from './sportist.service';

describe('SportistService', () => {
  let service: SportistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

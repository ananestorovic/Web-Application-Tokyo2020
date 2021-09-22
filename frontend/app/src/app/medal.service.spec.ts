import { TestBed } from '@angular/core/testing';

import { MedalService } from './medal.service';

describe('MedalService', () => {
  let service: MedalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

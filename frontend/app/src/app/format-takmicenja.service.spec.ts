import { TestBed } from '@angular/core/testing';

import { FormatTakmicenjaService } from './format-takmicenja.service';

describe('FormatTakmicenjaService', () => {
  let service: FormatTakmicenjaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormatTakmicenjaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

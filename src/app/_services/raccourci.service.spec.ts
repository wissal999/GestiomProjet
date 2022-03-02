import { TestBed } from '@angular/core/testing';

import { RaccourciService } from './raccourci.service';

describe('RaccourciService', () => {
  let service: RaccourciService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaccourciService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

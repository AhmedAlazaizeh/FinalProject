import { TestBed } from '@angular/core/testing';

import { InfluncersService } from './influncers.service';

describe('InfluncersService', () => {
  let service: InfluncersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfluncersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

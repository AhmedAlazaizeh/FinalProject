import { TestBed } from '@angular/core/testing';

import { InfluncerGuard } from './influncer.guard';

describe('InfluncerGuard', () => {
  let guard: InfluncerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InfluncerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { BuggyGuard } from './buggy.guard';

describe('BuggyGuard', () => {
  let guard: BuggyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BuggyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

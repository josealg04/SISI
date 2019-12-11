import { TestBed, async, inject } from '@angular/core/testing';

import { AuthadmGuard } from './authadm.guard';

describe('AuthadmGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthadmGuard]
    });
  });

  it('should ...', inject([AuthadmGuard], (guard: AuthadmGuard) => {
    expect(guard).toBeTruthy();
  }));
});

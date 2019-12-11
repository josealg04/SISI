import { TestBed, async, inject } from '@angular/core/testing';

import { AuthTutorGuard } from './auth-tutor.guard';

describe('AuthTutorGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthTutorGuard]
    });
  });

  it('should ...', inject([AuthTutorGuard], (guard: AuthTutorGuard) => {
    expect(guard).toBeTruthy();
  }));
});

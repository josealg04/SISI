import { TestBed } from '@angular/core/testing';

import { SemilleroService } from './semillero.service';

describe('SemilleroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SemilleroService = TestBed.get(SemilleroService);
    expect(service).toBeTruthy();
  });
});

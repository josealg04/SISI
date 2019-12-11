import { TestBed } from '@angular/core/testing';

import { EvaluadorService } from './evaluador.service';

describe('EvaluadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EvaluadorService = TestBed.get(EvaluadorService);
    expect(service).toBeTruthy();
  });
});

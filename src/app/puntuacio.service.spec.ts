import { TestBed } from '@angular/core/testing';

import { PuntuacioService } from './puntuacio.service';

describe('PuntuacioService', () => {
  let service: PuntuacioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PuntuacioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

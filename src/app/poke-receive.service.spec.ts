import { TestBed } from '@angular/core/testing';

import { PokeReceiveService } from './poke-receive.service';

describe('PokeReceiveService', () => {
  let service: PokeReceiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeReceiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SometimeService } from './sometime.service';

describe('SometimeService', () => {
  let service: SometimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SometimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

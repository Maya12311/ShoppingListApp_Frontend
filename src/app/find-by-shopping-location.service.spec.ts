import { TestBed } from '@angular/core/testing';

import { FindByShoppingLocationService } from './find-by-shopping-location.service';

describe('FindByShoppingLocationService', () => {
  let service: FindByShoppingLocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindByShoppingLocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

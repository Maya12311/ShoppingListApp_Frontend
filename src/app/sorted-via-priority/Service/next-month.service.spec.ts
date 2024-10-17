import { TestBed } from '@angular/core/testing';

import { NextMonthService } from './next-month.service';

describe('NextMonthService', () => {
  let service: NextMonthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NextMonthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

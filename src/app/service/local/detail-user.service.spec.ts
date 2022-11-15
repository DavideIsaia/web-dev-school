import { TestBed } from '@angular/core/testing';

import { DetailUserService } from './detail-user.service';

describe('DetailUserService', () => {
  let service: DetailUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

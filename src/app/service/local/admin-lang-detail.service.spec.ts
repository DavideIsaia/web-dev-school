import { TestBed } from '@angular/core/testing';

import { AdminLangDetailService } from './admin-lang-detail.service';

describe('AdminLangDetailService', () => {
  let service: AdminLangDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminLangDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

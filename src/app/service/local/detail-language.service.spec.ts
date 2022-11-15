import { TestBed } from '@angular/core/testing';

import { DetailLanguageService } from './detail-language.service';

describe('DetailLanguageService', () => {
  let service: DetailLanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailLanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

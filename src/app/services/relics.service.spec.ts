import { TestBed } from '@angular/core/testing';

import { RelicsService } from './relics.service';

describe('RelicsService', () => {
  let service: RelicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RelicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DressServiceService } from './dress-service.service';

describe('DressServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DressServiceService = TestBed.get(DressServiceService);
    expect(service).toBeTruthy();
  });
});

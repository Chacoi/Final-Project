import { TestBed } from '@angular/core/testing';

import { DiscusionService } from './discusion.service';

describe('DiscusionService', () => {
  let service: DiscusionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscusionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

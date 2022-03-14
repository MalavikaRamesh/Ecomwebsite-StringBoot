import { TestBed } from '@angular/core/testing';

import { LuserService } from './luser.service';

describe('LuserService', () => {
  let service: LuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ResclinicoserviceService } from './resclinicoservice.service';

describe('ResclinicoserviceService', () => {
  let service: ResclinicoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResclinicoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

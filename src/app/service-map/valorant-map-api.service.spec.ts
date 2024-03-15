import { TestBed } from '@angular/core/testing';

import { ValorantMapApiService } from './valorant-map-api.service';

describe('ValorantMapApiService', () => {
  let service: ValorantMapApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValorantMapApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

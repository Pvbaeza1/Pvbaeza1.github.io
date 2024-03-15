import { TestBed } from '@angular/core/testing';

import { ValorantWeaponsApiService } from '../service-weapons/valorant-weapons-api.service';

describe('ValorantWeaponsApiService', () => {
  let service: ValorantWeaponsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValorantWeaponsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

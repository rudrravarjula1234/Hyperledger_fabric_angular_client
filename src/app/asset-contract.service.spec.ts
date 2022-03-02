import { TestBed } from '@angular/core/testing';

import { AssetContractService } from './asset-contract.service';

describe('AssetContractService', () => {
  let service: AssetContractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetContractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

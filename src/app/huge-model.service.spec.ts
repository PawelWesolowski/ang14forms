import { TestBed } from '@angular/core/testing';

import { HugeModelService } from './huge-model.service';

describe('HugeModelService', () => {
  let service: HugeModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HugeModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

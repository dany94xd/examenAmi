import { TestBed, inject } from '@angular/core/testing';

import { OpcionesmenuService } from './opcionesmenu.service';

describe('OpcionesmenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpcionesmenuService]
    });
  });

  it('should be created', inject([OpcionesmenuService], (service: OpcionesmenuService) => {
    expect(service).toBeTruthy();
  }));
});

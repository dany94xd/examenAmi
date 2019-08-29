import { TestBed, inject } from '@angular/core/testing';

import { menuService } from './menu.service';

describe('menuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [menuService]
    });
  });

  it('should be created', inject([menuService], (service: menuService) => {
    expect(service).toBeTruthy();
  }));
});

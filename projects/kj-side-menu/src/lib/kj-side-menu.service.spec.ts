import { TestBed } from '@angular/core/testing';

import { KjSideMenuService } from './kj-side-menu.service';

describe('KjSideMenuService', () => {
  let service: KjSideMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KjSideMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

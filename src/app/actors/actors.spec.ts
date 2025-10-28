import { TestBed } from '@angular/core/testing';

import { Actors } from './actors';

describe('Actors', () => {
  let service: Actors;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Actors);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

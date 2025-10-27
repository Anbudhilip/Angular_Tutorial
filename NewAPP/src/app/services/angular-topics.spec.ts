import { TestBed } from '@angular/core/testing';

import { AngularTopics } from './angular-topics';

describe('AngularTopics', () => {
  let service: AngularTopics;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularTopics);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { ListGroupsService } from './list-groups.service';

describe('ListGroupsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListGroupsService]
    });
  });

  it('should ...', inject([ListGroupsService], (service: ListGroupsService) => {
    expect(service).toBeTruthy();
  }));
});

/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IssuesApiService } from './issues-api.service';

describe('IssuesApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IssuesApiService]
    });
  });

  it('should ...', inject([IssuesApiService], (service: IssuesApiService) => {
    expect(service).toBeTruthy();
  }));
});

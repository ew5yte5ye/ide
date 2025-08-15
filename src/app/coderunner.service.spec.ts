import { TestBed } from '@angular/core/testing';

import { CoderunnerService } from './coderunner.service';

describe('CoderunnerService', () => {
  let service: CoderunnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoderunnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

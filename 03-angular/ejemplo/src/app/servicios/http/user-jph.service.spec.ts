import {TestBed} from "@angular/core/testing";

import  {UserJphService} from "./user-jph.service";

describe('UserJPHService',() =>{
  let service: UserJphService;

  beforeEach(()=>{
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserJphService);
  });
  it('should be created',  () => {
    expect(service).toBeTruthy();

  });
});


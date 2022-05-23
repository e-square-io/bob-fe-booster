import { TestBed } from '@angular/core/testing';

import { HttpLoggerInterceptor } from './http-logger.interceptor';

describe('HttpLoggerInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpLoggerInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpLoggerInterceptor = TestBed.inject(HttpLoggerInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

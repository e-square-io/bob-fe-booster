import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('From interceptor');

    return this.authService.getUser().pipe(
      switchMap((user: string | null) => {
        let headers = new HttpHeaders();

        if (user) {
          headers = headers.append('user-token', user);
        }

        request = request.clone({ headers })


        return next.handle(request);
      })
    )

  }
}

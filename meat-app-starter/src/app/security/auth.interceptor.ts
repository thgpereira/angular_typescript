import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http'
import { Injectable, Injector } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { LoginService } from './login/login.service'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const loginService = this.injector.get(LoginService)
    if (loginService.isLoggedIn()) {
      const authRequest = request.clone({
        setHeaders: { 'Authorization': `Bearer ${loginService.user.accessToken}` }
      });
      return next.handle(authRequest)
    }
    return next.handle(request);
  }

}
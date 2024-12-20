import {HttpInterceptorFn} from '@angular/common/http';
import {AuthService} from './auth.service';
import {inject} from '@angular/core';


export const authTokenInterceptor: HttpInterceptorFn = (req, next)=>{
  const authService = inject(AuthService);
  const token = authService.token;
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  return next(req);
}


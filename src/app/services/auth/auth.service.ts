import {HttpClient} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {map, Observable} from 'rxjs';
import {Login} from './login.model';

const AUTH_API = 'http://localhost:8080/api/authenticate';

type JwtToken = {
  id_token: string;
};
@Injectable({
  providedIn: 'root',
})
export class AuthService{
  cookieService = inject(CookieService);
  http = inject(HttpClient);
  router = inject(Router);

  token : string | null = null;

  login(credentials: Login) : Observable<void> {
    return this.http.post<JwtToken>(AUTH_API, credentials)
      .pipe(map(response => this.saveToken(response)));
  }

  logout(){
    this.cookieService.deleteAll();
    this.token = null;
    this.router.navigate(['/']);
  }

  private saveToken(jwtToken: JwtToken) : void {
    this.token = jwtToken.id_token;
    this.cookieService.set('token', this.token);
  }

  get isAuth(){
    return !!this.token;
  }

}

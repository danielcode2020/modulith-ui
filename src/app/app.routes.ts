import { Routes } from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {PublicPageComponent} from './pages/public-page/public-page.component';
import {canActivateAuth} from './services/auth/access.guards';
import {TestComponent} from './pages/test/test.component';

export const routes: Routes = [
  {
    path: '', component: PublicPageComponent
  },
  {
    path: 'login', component: LoginPageComponent
  },
  {
    path: 'test', component: TestComponent
  },
  {
    path: 'home', component: HomePageComponent,
    canActivate: [canActivateAuth]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

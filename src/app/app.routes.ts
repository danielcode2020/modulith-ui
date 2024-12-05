import { Routes } from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {PublicPageComponent} from './pages/public-page/public-page.component';
import {canActivateAuth} from './services/auth/access.guards';

export const routes: Routes = [
  {
    path: '', component: PublicPageComponent
  },
  {
    path: 'login', component: LoginPageComponent
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

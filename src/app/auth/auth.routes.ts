import { Routes } from '@angular/router';
import { RouteEnum } from '@core/enums';

export const AUTH_ROUTES: Routes = [
  { path: '', redirectTo: RouteEnum.SIGN_IN, pathMatch: 'full' },
  {
    path: RouteEnum.SIGN_IN,
    loadComponent: () => import('./components/sign-in/sign-in.component').then(c => c.SignInComponent),
  },
  {
    path: '**',
    redirectTo: RouteEnum.SIGN_IN,
  },
];

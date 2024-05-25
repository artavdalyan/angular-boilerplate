import { Routes, UrlTree } from '@angular/router';
import { RouteEnum } from '@core/enums';
import { AccessGuard, AuthGuard } from '@core/guards';
import { Observable } from 'rxjs';

export const routes: Routes = [
  {
    path: RouteEnum.AUTH,
    canActivate: [(): UrlTree | boolean => AuthGuard()],
    canActivateChild: [(): UrlTree | boolean => AuthGuard()],
    loadComponent: () => import('./auth/auth.component').then(c => c.AuthComponent),
    loadChildren: () => import('./auth/auth.routes').then(r => r.AUTH_ROUTES),
  },
  {
    path: '',
    canActivate: [(): Observable<boolean> | UrlTree => AccessGuard()],
    canActivateChild: [(): Observable<boolean> | UrlTree => AccessGuard()],
    loadComponent: () => import('./layout/layout.component').then(c => c.LayoutComponent),
    loadChildren: () => import('./layout/layout.routes').then(r => r.LAYOUT_ROUTES),
  },
  { path: '**', redirectTo: '' },
];

import { Routes } from '@angular/router';
import { RouteEnum } from '@core/enums';

export const LAYOUT_ROUTES: Routes = [
  {
    path: '',
    redirectTo: RouteEnum.DASHBOARD,
    pathMatch: 'full',
  },
  {
    path: RouteEnum.DASHBOARD,
    title: 'Dashboard',
    loadComponent: () => import('../pages/dashboard/dashboard.component').then(c => c.DashboardComponent),
  },
];

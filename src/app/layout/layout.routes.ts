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

  {
    path: RouteEnum.USERS,
    title: 'Users',
    loadComponent: () => import('../pages/users/users.component').then(c => c.UsersComponent),
  },
  {
    path: RouteEnum.NOTIFICATIONS,
    title: 'Users',
    loadComponent: () => import('../pages/notifications/notifications.component').then(c => c.NotificationsComponent),
  },
];

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
  {
    path: RouteEnum.OFFERS,
    title: 'Offers',
    loadComponent: () => import('../pages/offers/offers.component').then(c => c.OffersComponent),
  },
  {
    path: RouteEnum.EVENTS,
    title: 'Events',
    loadComponent: () => import('../pages/events/events.component').then(c => c.EventsComponent),
  },
];

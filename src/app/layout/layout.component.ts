import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarMenuItem } from '@core/interfaces/submenu';
import { SharedModule } from '@shared/shared.module';

import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';
import { UserComponent } from './components/user/user.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, SharedModule, UserComponent, LanguageSwitcherComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  isCollapsed = false;

  menuItems: SidebarMenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'dashboard',
      path: '/dashboard',
    },
    {
      title: 'Users',
      icon: 'user',
      path: '/users',
    },
    {
      title: 'Complaints',
      icon: 'alert',
      path: '/complaints',
    },
    {
      title: 'Transport modes',
      icon: 'car',
      path: '/transport-modes',
    },

    {
      path: '',
      title: 'Offers',
      icon: 'tag',
      submenu: [
        {
          path: 'order-history',
          title: 'order-history',
          icon: 'history',
        },
      ],
    },
    {
      title: 'VIP bookings',
      icon: 'star',
      path: '/bookings',
    },
    {
      title: 'Notifications',
      icon: 'notification',
      path: '/notifications',
    },
    {
      title: 'Custom pages',
      icon: 'setting',
      path: '/pages',
    },
  ];
}

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
      icon: 'icons:home',
      path: '/dashboard',
    },
    {
      title: 'Users',
      icon: 'icons:users',
      path: '/users',
    },
    // {
    //   title: 'Complaints',
    //   icon: 'alert',
    //   path: '/complaints',
    // },
    {
      title: 'Transport modes',
      icon: 'icons:transport',
      path: '/transports',
    },

    {
      path: '',
      title: 'Offers',
      icon: 'icons:offer',
      submenu: [
        {
          path: 'offers',
          title: 'Offers',
          icon: 'icons:offer',
        },
        {
          path: 'events',
          title: 'Events',
          icon: 'icons:calendar',
        },
      ],
    },
    // {
    //   title: 'VIP bookings',
    //   icon: 'star',
    //   path: '/bookings',
    // },
    {
      title: 'Notifications',
      icon: 'icons:bell',
      path: '/notifications',
    },
    // {
    //   title: 'Custom pages',
    //   icon: 'setting',
    //   path: '/pages',
    // },
  ];
}

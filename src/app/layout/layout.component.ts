import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from "@shared/shared.module";
import { SidebarMenuItem } from "@core/interfaces/submenu";
import { UserComponent } from "./components/user/user.component";
import { LanguageSwitcherComponent } from "./components/language-switcher/language-switcher.component";

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
      title: 'Notifications',
      icon: 'notification',
      path: '/notifications',
    }
  ]
}

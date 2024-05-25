import { Params } from '@angular/router';

export interface SidebarMenuItem {
  title: string;
  icon: string;
  path: string;
  queryParam?: Params | null;
  submenu?: SidebarMenuItem[];
}

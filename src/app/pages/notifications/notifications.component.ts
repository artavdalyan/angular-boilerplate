import { NgForOf, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputDirective } from 'ng-zorro-antd/input';
import { NzPopconfirmDirective } from 'ng-zorro-antd/popconfirm';
import { NzTableCellDirective, NzTableComponent, NzTbodyComponent, NzTheadComponent, NzThMeasureDirective, NzTrDirective } from 'ng-zorro-antd/table';

import { NotificationMockData, notificationsData } from '../../mockdata';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    NzInputDirective,
    NzPopconfirmDirective,
    NzTableCellDirective,
    NzTableComponent,
    NzTbodyComponent,
    NzThMeasureDirective,
    NzTheadComponent,
    NzTrDirective,
  ],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationsComponent {
  notificationOfData: NotificationMockData[] = [];

  loading = signal(true);

  constructor() {
    setTimeout(() => {
      this.loading.set(false);
      this.notificationOfData = notificationsData;
    }, 500);
  }
}

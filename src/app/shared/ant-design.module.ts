import { NgModule } from '@angular/core';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NZ_CONFIG, NzConfig } from 'ng-zorro-antd/core/config';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NZ_DATE_CONFIG } from 'ng-zorro-antd/i18n';
import { NzDateConfig } from 'ng-zorro-antd/i18n/date-config';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzUploadModule } from 'ng-zorro-antd/upload';

const ngZorroConfig: NzConfig = {
  notification: { nzMaxStack: 1, nzDuration: 5000 },
  message: { nzMaxStack: 1 },
};
const ngDateConfig: NzDateConfig = {
  firstDayOfWeek: 1,
};
const antdModule = [
  NzAvatarModule,
  NzBadgeModule,
  NzRadioModule,
  NzDropDownModule,
  NzListModule,
  NzDrawerModule,
  NzDividerModule,
  NzSwitchModule,
  NzInputModule,
  NzMessageModule,
  NzButtonModule,
  NzSelectModule,
  NzAlertModule,
  NzTagModule,
  NzFormModule,
  NzCardModule,
  NzSpinModule,
  NzToolTipModule,
  NzDescriptionsModule,
  NzUploadModule,
  NzModalModule,
  NzEmptyModule,
  NzIconModule,
  NzDatePickerModule,
  NzTimePickerModule,
  NzNotificationModule,
  NzPopoverModule,
  NzTabsModule,
  NzTableModule,
  NzCheckboxModule,
  NzAutocompleteModule,
  NzCollapseModule,
  NzStepsModule,
  NzSelectModule,
  NzInputNumberModule,
  NzTypographyModule,
  NzStatisticModule,
  NzProgressModule,
  NzPopconfirmModule,
  NzSkeletonModule,
  NzFormModule,
  NzSpaceModule,
  NzLayoutModule,
  NzNoAnimationModule,
  NzResultModule,
  NzTransferModule,
  NzTreeModule,
  NzTimelineModule,
  NzImageModule,
  NzRateModule,
];
@NgModule({
  providers: [
    { provide: NZ_CONFIG, useValue: ngZorroConfig },
    { provide: NZ_DATE_CONFIG, useValue: ngDateConfig },
  ],
  imports: [...antdModule],
  exports: [...antdModule],
})
export class AntDesignModule {}

import { NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NzTableCellDirective, NzTableComponent, NzTbodyComponent, NzTheadComponent, NzThMeasureDirective, NzTrDirective } from 'ng-zorro-antd/table';

import { OfferMockData, offersData } from '../../mockdata';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [NgForOf, NzTableCellDirective, NzTableComponent, NzTbodyComponent, NzThMeasureDirective, NzTheadComponent, NzTrDirective],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OffersComponent {
  loading = signal(true);

  offersData: OfferMockData[] = [];

  constructor() {
    this.loading.set(true);
    setTimeout(() => {
      this.offersData = offersData;
      this.loading.set(false);
    }, 1000);
  }
}

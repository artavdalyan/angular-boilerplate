import { NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NzTableCellDirective, NzTableComponent, NzTbodyComponent, NzTheadComponent, NzThMeasureDirective, NzTrDirective } from 'ng-zorro-antd/table';

import { eventsData, EventsMockData } from '../../mockdata';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [NgForOf, NzTableCellDirective, NzTableComponent, NzTbodyComponent, NzThMeasureDirective, NzTheadComponent, NzTrDirective],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsComponent {
  eventsData = signal<EventsMockData[]>(eventsData);
}

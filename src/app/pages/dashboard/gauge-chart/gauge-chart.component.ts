import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-gauge-chart',
  standalone: true,
  imports: [],
  templateUrl: './gauge-chart.component.html',
  styleUrl: './gauge-chart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GaugeChartComponent {}

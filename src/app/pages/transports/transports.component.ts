import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';

import { transportsData } from '../../mockdata';
import { ChartOptions } from '../dashboard/dashboard.component';
import { GaugeChartComponent } from '../dashboard/gauge-chart/gauge-chart.component';

@Component({
  selector: 'app-transports',
  standalone: true,
  imports: [SharedModule, GaugeChartComponent, NgApexchartsModule],
  templateUrl: './transports.component.html',
  styleUrl: './transports.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransportsComponent {
  protected readonly transportsData = transportsData;

  public chartOptions: Partial<ChartOptions> = {
    series: [
      {
        name: 'bar',
        data: [2000, 1250, 1000, 750],
      },
    ],
    chart: {
      height: 350,
      width: '100%',
      type: 'bar',
      toolbar: {
        show: false,
      },
    },
    colors: ['#007dc0', '#00a79e', '#b13a8d', '#6f4293'],
    plotOptions: {
      bar: {
        columnWidth: '30%',
        distributed: true,
        colors: {
          ranges: [
            {
              from: 0,
              to: 1000,
              color: '#007dc0',
            },
            {
              from: 0,
              to: 1250,
              color: '#00a79e',
            },
            {
              from: 0,
              to: 1000,
              color: '#b13a8d',
            },
            {
              from: 0,
              to: 750,
              color: '#6f4293',
            },
          ],
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
      labels: {
        colors: ['#007dc0', '#00a79e', '#b13a8d', '#6f4293'],
      },
    },
    grid: {
      show: false,
    },
    xaxis: {
      categories: ['Car', 'Uber', 'Shuttle bus ', 'Walk'],
      labels: {
        style: {
          colors: ['#007dc0', '#00a79e', '#b13a8d', '#6f4293'],
          fontSize: '12px',
        },
      },
    },
  };
}

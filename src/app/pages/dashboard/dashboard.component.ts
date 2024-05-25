import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CountUpDirective } from '@core/directives/animated-counter';
import { SharedModule } from '@shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgApexchartsModule, SharedModule, CountUpDirective],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {}

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SignOut } from '@core/store/actions';
import { Store } from '@ngxs/store';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  router = inject(Router);

  store = inject(Store);

  logOut(): void {
    this.store.dispatch(new SignOut()).subscribe(() => {
      void this.router.navigate(['/auth/sign-in']);
    });
  }
}

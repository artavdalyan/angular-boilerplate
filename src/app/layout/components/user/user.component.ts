import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SharedModule } from "@shared/shared.module";
import { Router } from "@angular/router";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent {
   router = inject(Router);


    logOut() {
        this.router.navigate(['/auth/sign-in']);
    }
}

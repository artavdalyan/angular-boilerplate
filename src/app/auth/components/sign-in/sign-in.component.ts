import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignIn } from '@core/store/actions';
import { FormControl, FormGroup } from '@ngneat/reactive-forms';
import { Store } from '@ngxs/store';
import { SharedModule } from '@shared/shared.module';
import { NgOtpInputModule } from 'ng-otp-input';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [SharedModule, NgOtpInputModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent {
  loading = signal(false);

  showOtp = signal(false);

  private router = inject(Router);

  private store = inject(Store);

  public managerLogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(6)]),
  });

  public otpControl = new FormControl('', [Validators.required]);

  sendOtp(): void {
    this.managerLogin.markAllAsTouched();

    if (this.managerLogin.invalid) {
      return;
    }

    this.loading.set(true);

    setTimeout(() => {
      this.loading.set(false);
      this.showOtp.set(true);
    }, 500);

    //this.router.navigate(['/dashboard']);
  }

  login(): void {
    if (this.otpControl.value.length !== 6) {
      return;
    }

    this.loading.set(true);

    setTimeout(() => {
      this.loading.set(false);
      this.store.dispatch(new SignIn()).subscribe(() => {
        void this.router.navigate(['/dashboard']);
      });
    }, 500);
  }
}

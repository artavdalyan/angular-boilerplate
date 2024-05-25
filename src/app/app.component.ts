import { DOCUMENT } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { LanguageSelector } from '@core/store/selectors';
import { Store } from '@ngxs/store';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private store = inject(Store);

  selectedLanguage = toSignal<string>(this.store.selectOnce(LanguageSelector.languageCode));

  document = inject(DOCUMENT);

  constructor() {
    this.changeDirection();
  }

  changeDirection(): void {
    if (this.selectedLanguage() === 'ar') {
      this.document.documentElement.dir = 'rtl';
    }
  }
}

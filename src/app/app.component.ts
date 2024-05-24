import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { toSignal } from "@angular/core/rxjs-interop";
import { LanguageSelector } from "@core/store/selectors";
import { DOCUMENT } from "@angular/common";
import { Store } from "@ngxs/store";

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

  changeDirection() {
    debugger;
    if (this.selectedLanguage() === 'ar') {
      this.document.documentElement.dir = 'rtl';
    }

  }
}

import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { SharedModule } from "@shared/shared.module";
import { environment } from "@environments/environment";
import { toSignal } from "@angular/core/rxjs-interop";
import { LanguageSelector } from "@core/store/selectors";
import { Store } from "@ngxs/store";
import { LanguageCodeEnum } from "@core/enums";
import { SetLanguage } from "@core/store/actions";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageSwitcherComponent {
  languages = signal(environment.availableLanguages);

  private document = inject(DOCUMENT);
  private store = inject(Store);

  selectedLanguage = toSignal<string>(this.store.selectOnce(LanguageSelector.languageCode));

  changeLanguage(language: LanguageCodeEnum): void {
    if (language === this.selectedLanguage()) {
      return;
    }

    this.store.dispatch(new SetLanguage(language));
    this.document.location.reload();
  }
}

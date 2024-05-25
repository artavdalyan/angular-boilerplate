import { registerLocaleData } from '@angular/common';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { interceptors } from '@core/interceptors';
import { AuthState, LanguageState } from '@core/store/state';
import { TranslocoHttpLoader } from '@core/transloco-http-loader';
import { environment } from '@environments/environment';
import { provideTransloco, Translation, TranslocoService } from '@ngneat/transloco';
import { NgxsActionsExecutingModule } from '@ngxs-labs/actions-executing';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsModule } from '@ngxs/store';
/** config ng-zorro-antd i18n **/
import { provideNzI18n, en_US } from 'ng-zorro-antd/i18n';
import { NgxsResetPluginModule } from 'ngxs-reset-plugin';
import { firstValueFrom } from 'rxjs';

/** config angular i18n **/
registerLocaleData(en);
import { routes } from './app.routes';

export function tokenGetter() {
  return localStorage.getItem('authState.accessToken');
}

const preloadLang = (transloco: TranslocoService) => async (): Promise<Translation> => {
  const local = 'en';
  transloco.setActiveLang(local);

  return firstValueFrom(transloco.load(local));
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter(routes),
    importProvidersFrom(
      NgxsModule.forRoot([AuthState, LanguageState], {
        developmentMode: !environment.production,
        selectorOptions: {
          suppressErrors: false,
          injectContainerState: false,
        },
      }),
      NgxsLoggerPluginModule.forRoot({
        disabled: environment.production,
      }),
      NgxsReduxDevtoolsPluginModule.forRoot({
        disabled: environment.production,
      }),
      NgxsStoragePluginModule.forRoot({
        key: ['authState.accessToken', 'languageState.langName'],
      }),
      NgxsResetPluginModule.forRoot(),
      NgxsActionsExecutingModule.forRoot(),
      NgxsRouterPluginModule.forRoot(),
    ),
    provideHttpClient(withInterceptorsFromDi(), withInterceptors(interceptors)),
    provideNzI18n(en_US),
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: preloadLang,
      deps: [TranslocoService],
    },
    provideTransloco({
      config: {
        availableLangs: environment.availableLanguages,
        defaultLang: 'en',
        fallbackLang: 'en',
        reRenderOnLangChange: true,
        prodMode: environment.production,
      },
      loader: TranslocoHttpLoader,
    }),
  ],
};

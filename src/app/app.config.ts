import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideTransloco, Translation, TranslocoService } from '@ngneat/transloco';
import { environment } from '@environments/environment';
import { TranslocoHttpLoader } from '@core/transloco-http-loader';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi, withJsonpSupport } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsResetPluginModule } from 'ngxs-reset-plugin';
import { NgxsActionsExecutingModule } from '@ngxs-labs/actions-executing';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { AuthState, LanguageState } from '@core/store/state';
import { interceptors } from '@core/interceptors';
import { provideAnimations } from "@angular/platform-browser/animations";
import { firstValueFrom } from "rxjs";

export function tokenGetter() {
  return localStorage.getItem('authState.accessToken');
}

const preloadLang = (transloco: TranslocoService) => async (): Promise<Translation> => {
  let local = 'en';
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
    provideHttpClient(
      withInterceptorsFromDi(),
      withInterceptors(interceptors),
    ),
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

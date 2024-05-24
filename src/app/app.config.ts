import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideTransloco } from '@ngneat/transloco';
import { environment } from '@environments/environment';
import { TranslocoHttpLoader } from '@core/transloco-http-loader';
import { LanguageCodeEnum } from '@core/enums';
import { JwtModule } from '@auth0/angular-jwt';
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

export function tokenGetter() {
  return localStorage.getItem('authState.accessToken');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      JwtModule.forRoot({
        config: {
          tokenGetter: tokenGetter,
          allowedDomains: [environment.apiUrl.split('://')[1]],
          skipWhenExpired: true,
        },
      }),
    ),
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
    provideHttpClient(withInterceptorsFromDi(), withInterceptors(interceptors), withJsonpSupport()),
    provideTransloco({
      config: {
        availableLangs: environment.availableLanguages,
        defaultLang: LanguageCodeEnum.EN,
        fallbackLang: LanguageCodeEnum.EN,
        reRenderOnLangChange: true,
        prodMode: environment.production,
      },
      loader: TranslocoHttpLoader,
    }),
  ],
};

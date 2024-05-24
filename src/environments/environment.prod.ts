import { LanguageCodeEnum } from '@core/enums';
import { AppConfig } from '@core/interfaces';

export const environment: AppConfig = {
  production: true,
  baseURI: document.baseURI,
  apiUrl: '',
  availableLanguages: [LanguageCodeEnum.EN, LanguageCodeEnum.AR],
};

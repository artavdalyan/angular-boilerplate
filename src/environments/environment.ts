import { LanguageCodeEnum } from '@core/enums';
import { AppConfig } from '@core/interfaces';

export const environment: AppConfig = {
  production: false,
  baseURI: document.baseURI,
  apiUrl: '',
  availableLanguages: [LanguageCodeEnum.EN],
};

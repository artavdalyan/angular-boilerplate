import { LanguageCodeEnum } from '@core/enums';

export interface AppConfig {
  production: boolean;
  baseURI: string;
  apiUrl: string;
  availableLanguages: LanguageCodeEnum[];
}

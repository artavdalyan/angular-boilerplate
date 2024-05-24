import { LanguageCodeEnum } from '@core/enums';

export class SetLanguage {
  static readonly type: string = '[Language] SetLanguage';

  constructor(public langName: LanguageCodeEnum) {}
}

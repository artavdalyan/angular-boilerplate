import { Selector } from '@ngxs/store';
import { LanguageCodeEnum } from '@core/enums';
import { LanguageState, LanguageStateModel } from '@core/store/state';

export class LanguageSelector {
  @Selector([LanguageState])
  static languageCode(state: LanguageStateModel): LanguageCodeEnum {
    return state.langName;
  }
}

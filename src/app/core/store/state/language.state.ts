import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { LanguageCodeEnum } from '@core/enums';
import { SetLanguage } from '@core/store/actions';

export interface LanguageStateModel {
  langName: LanguageCodeEnum;
}

const defaults: LanguageStateModel = {
  langName: LanguageCodeEnum.EN,
};

@Injectable()
@State<LanguageStateModel>({
  defaults,
  name: 'languageState',
})
export class LanguageState {
  @Action(SetLanguage)
  setLanguage(ctx: StateContext<LanguageStateModel>, { langName }: SetLanguage): void {
    ctx.patchState({ langName });
  }
}

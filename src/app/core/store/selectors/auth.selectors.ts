import { AuthState, AuthStateModel } from '@core/store/state/auth.state';
import { Selector } from '@ngxs/store';
import { Nullable } from '@core/interfaces';

export class AuthSelectors {
  @Selector([AuthState])
  static accessToken({ accessToken }: AuthStateModel): Nullable<string> {
    return accessToken;
  }
}

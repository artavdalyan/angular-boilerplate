import { inject, Injectable } from '@angular/core';
import { Nullable } from '@core/interfaces';
import { AuthService } from '@core/services/auth.service';
import { FullReset, SignIn, SignOut } from '@core/store/actions';
import { Action, State, StateContext } from '@ngxs/store';
import { produce } from 'immer';

export interface AuthStateModel {
  accessToken: Nullable<string>;
}

const defaults: AuthStateModel = {
  accessToken: null,
};

@State<AuthStateModel>({
  name: 'authState',
  defaults,
})
@Injectable()
export class AuthState {
  private authService = inject(AuthService);

  @Action(SignIn)
  signIn(ctx: StateContext<AuthStateModel>): void {
    ctx.setState({
      accessToken: 'bearer token',
    });
  }

  @Action(SignOut)
  signOut(ctx: StateContext<AuthStateModel>): void {
    ctx.setState(
      produce(ctx.getState(), draft => {
        draft.accessToken = null;
      }),
    );
  }

  @Action(FullReset)
  resetState({ setState }: StateContext<AuthStateModel>): void {
    setState(defaults);
  }
}

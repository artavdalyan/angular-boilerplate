import { inject, Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { produce } from 'immer';
import { Observable, tap } from 'rxjs';
import { AuthService } from '@core/services/auth.service';
import { FullReset, SignIn, SignOut } from '@core/store/actions';
import { LoginPayloadDto, Nullable } from '@core/interfaces';

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
  signIn(ctx: StateContext<AuthStateModel>, { payload }: SignIn): Observable<LoginPayloadDto> {
    return this.authService.signIn(payload.user).pipe(
      tap(res => {
        ctx.setState(
          produce(ctx.getState(), draft => {
            draft.accessToken = res.accessToken.token;
          }),
        );
      }),
    );
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

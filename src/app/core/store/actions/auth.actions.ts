import { User } from '@core/interfaces/user';

export class SignIn {
  static readonly type = '[Auth] SignIn';

  constructor(public payload: { user: User }) {}
}

export class SignOut {
  static readonly type = '[Auth] SignOut';
}

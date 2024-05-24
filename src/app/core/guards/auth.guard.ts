import { inject } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Store } from '@ngxs/store';
import { AuthSelectors } from '@core/store/selectors';

export const AuthGuard = (store = inject(Store), router = inject(Router)): UrlTree | boolean => {
  const hasAccessToken = store.selectSnapshot(AuthSelectors.accessToken);

  if (hasAccessToken) {
    return router.createUrlTree(['/dash']);
  }

  return true;
};

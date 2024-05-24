import { DOCUMENT } from '@angular/common';
import { inject } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Store } from '@ngxs/store';
import { filter, map, Observable, take } from 'rxjs';
import { RouteEnum } from '@core/enums';
import { AuthSelectors } from '@core/store/selectors';

export const AccessGuard = (store = inject(Store), router = inject(Router), document = inject(DOCUMENT)): Observable<boolean> | UrlTree => {
  const hasAccessToken = store.selectSnapshot(AuthSelectors.accessToken);
  let returnUrl;

  if (hasAccessToken) {
    return store.select(AuthSelectors.accessToken).pipe(
      filter(Boolean),
      take(1),
      map(() => true),
    );
  }

  if (document.location.pathname !== '/') {
    returnUrl = document.location.pathname;

    if (document.location.hash) {
      returnUrl += document.location.hash;
    }

    if (document.location.search) {
      returnUrl += document.location.search;
    }
  }

  return router.createUrlTree([RouteEnum.AUTH], {
    queryParams: {
      returnUrl,
    },
  });
};

import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpRequest, HttpStatusCode } from '@angular/common/http';
import { EnvironmentInjector, inject } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ErrorService } from '@core/services';

export const errorHandlerInterceptor =
  () =>
  (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
    const injector = inject(EnvironmentInjector);
    const errorService = injector.get(ErrorService);

    return next(req).pipe(
      catchError((err: HttpErrorResponse): Observable<never> => {
        if (err.status === HttpStatusCode.Unauthorized) {
          errorService.handedUnauthorized();
        }

        return throwError(() => errorService.handleErrors(req, err));
      }),
    );
  };

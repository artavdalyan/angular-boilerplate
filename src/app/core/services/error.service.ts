import {
  HttpErrorResponse,
  HttpRequest,
  HttpStatusCode,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { FullReset, SignOut } from '@core/store/actions';
// import { AuthSelectors } from '@core/store/selectors';
import { TranslocoService } from '@ngneat/transloco';
// import { Store } from '@ngxs/store';
import { ErrorMessages, Errors } from '@core/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  // private store = inject(Store);
  //
  // private router = inject(Router);

  private translocoService = inject(TranslocoService);

  handleErrors(
    req: HttpRequest<unknown>,
    response: {
      status: number;
      error: {
        message: string | ErrorMessages[];
        errors?: ErrorMessages[];
        validationErrors: { [key: string]: string | Errors };
      };
    },
  ):
    | HttpErrorResponse
    | {
        error: {
          message: string | ErrorMessages[];
          errors?: ErrorMessages[];
          validationErrors: { [key: string]: string | Errors };
        };
      } {
    response.error.validationErrors = {};

    switch (response.status) {
      case HttpStatusCode.Forbidden:
      case HttpStatusCode.InternalServerError:
      case HttpStatusCode.NotFound:
      case HttpStatusCode.Conflict:
      case HttpStatusCode.BadRequest: {
        if (
          !req.headers.has('noErrorHandler') &&
          !Reflect.has(response.error, 'line')
        ) {
          this.showErrorMessage();
        }

        break;
      }
      case HttpStatusCode.UnprocessableEntity: {
        if (!req.headers.has('noErrorHandler')) {
          response.error.validationErrors = this.handleUnprocessedEntity(
            (response.error.errors ??
              response.error.message) as ErrorMessages[],
          );
        }
      }
    }

    return response;
  }

  handleUnprocessedEntity(errors: ErrorMessages[]): Errors {
    const error = {} as { [key: string]: string | Errors };

    for (const { children, constraints, property } of errors) {
      if (children.length > 0) {
        error[property] = this.handleUnprocessedEntity(children);
      }

      if (children.length === 0) {
        const constraintKey = Object.keys(constraints)[0];
        error[property] = this.translocoService.translate(
          'error.' + constraintKey,
        );
      }
    }

    return error;
  }

  handedUnauthorized(): void {
    // const accessToken = this.store.selectSnapshot(AuthSelectors.accessToken);
    //
    // if (accessToken) {
    //   this.store
    //     .dispatch(new SignOut())
    //     .pipe(
    //       switchMap(() => this.router.navigate([RouteEnum.AUTH])),
    //       switchMap(() => this.store.dispatch(new FullReset())),
    //     )
    //     .subscribe();
    // }
  }

  showErrorMessage(): void {
    console.log('Error handled');
  }
}

import { HttpEvent, HttpHandlerFn, HttpParams, HttpRequest, HttpUrlEncodingCodec } from '@angular/common/http';
import { format } from 'date-fns';
import { isNull, isUndefined } from 'lodash-es';
import { Observable } from 'rxjs';

export const encodeHttpParamsInterceptor =
  () =>
  (request: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
    request = request.clone({
      params: new HttpParams({
        fromObject: request.params.keys().reduce((params: Record<string, any>, key: string) => {
          for (let value of request.params.getAll(key) as any[]) {
            if (value.trim() !== '' && !isUndefined(value) && !isNull(value)) {
              if (value.includes('GMT')) {
                value = format(new Date(value), 'yyyy-MM-dd HH:mm');
              }

              params[key] = params[key] ? [value, ...params[key]] : [value];
            }
          }

          return params;
        }, {}) as any,
        encoder: new HttpUrlEncodingCodec(),
      }),
    });

    return next(request);
  };

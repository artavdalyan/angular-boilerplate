import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

export const apiPrefixInterceptor =
  () =>
  (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
    if (!/^(http|https):/i.test(req.url)) {
      req = req.clone({
        url: (req.url.includes('svg') ? document.baseURI : environment.apiUrl) + req.url,
      });
    }

    return next(req);
  };

import { HttpInterceptorFn } from '@angular/common/http';

import { apiPrefixInterceptor } from './api-prefix.interceptor';
import { encodeHttpParamsInterceptor } from '@core/interceptors/encode-http-params.interceptor';
import { errorHandlerInterceptor } from '@core/interceptors/error-handler.interceptor';

export const interceptors: HttpInterceptorFn[] = [
  apiPrefixInterceptor(),
  encodeHttpParamsInterceptor(),
  errorHandlerInterceptor(),
];

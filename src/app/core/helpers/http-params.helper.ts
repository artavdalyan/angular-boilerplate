import { HttpParams } from '@angular/common/http';
import { Params } from '@angular/router';

export function constructHttpParams(params?: Params): HttpParams | undefined {
  if (!params) {
    return undefined;
  }

  return new HttpParams({ fromObject: params });
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Observable } from 'rxjs';

declare global {
  type Uuid = string;
  type SelectType<T> = T extends (...args: any) => any
    ? Observable<ReturnType<T>>
    : Observable<T>;
}

export {};

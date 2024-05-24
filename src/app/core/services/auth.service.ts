import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginPayloadDto } from '@core/interfaces';
import { User } from '@core/interfaces/user';
import { Utils } from '@core/utils';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'auth';

  private http = inject(HttpClient);

  signIn(data: User): Observable<LoginPayloadDto> {
    return this.http.post<LoginPayloadDto>(`/${this.url}`, Utils.cleanNullables(data));
  }
}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { RegisterUser } from '../models/register-user.interface';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly _httpClient = inject(HttpClient);

  public isUserAuthenticated = signal(true);

  constructor() {}

  register(userData: RegisterUser) {
    this._httpClient
      .post(`${environment.apiUrl}/user/register`, userData)
      .subscribe();
  }

  login(userData: { email: string; password: string }): Observable<any> {
    return this._httpClient.post(`${environment.apiUrl}/user/login`, userData);
  }

  setUserAuthentication(value: boolean): void {
    this.isUserAuthenticated.set(value);
  }
}

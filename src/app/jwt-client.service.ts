import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationRequest } from './model/AuthenticationRequest';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { RegisterRequest } from './model/RegisterRequest';

@Injectable({
  providedIn: 'root',
})
export class JwtClientService {
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  public login(authRequest: AuthenticationRequest): Observable<any> {
    return this.http
      .post(
        'http://localhost:8081/api/v1/account/login',
        authRequest,
        this.httpOptions
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            // Handle authentication failure
            console.log('Invalid username or password');
          }
          return throwError(() => error);
        })
      );
  }

  public register(registerRequest: RegisterRequest): Observable<any> {
    return this.http
      .post(
        'http://localhost:8081/api/v1/account/register',
        registerRequest,
        this.httpOptions
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 409) {
            // Handle register failure
            console.log('User already exists');
          }
          return throwError(() => error);
        })
      );
  }

  logout(): void {
    // Remove the JWT token from local storage
    localStorage.removeItem('access_token');
  }

  isLoggedIn(): boolean {
    // Check if the JWT token is present in local storage
    return localStorage.getItem('access_token') !== null;
  }
}

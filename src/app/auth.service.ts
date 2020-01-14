import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { JwtDTO } from './api/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  redirectUrl: string;
  token: JwtDTO;

  constructor() { }

  login(token: JwtDTO): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = true),
      tap(val => this.token = token)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}

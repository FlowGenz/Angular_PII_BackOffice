import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { JwtDTO } from './api/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private redirectUrl: string;
  private accessToken: JwtDTO;
  private username: BehaviorSubject<string>;

  constructor() {
      this.username = new BehaviorSubject<string>("");
   }

   public setToken(token: JwtDTO) {
     this.accessToken = token;
   }

   public getToken(): JwtDTO {
     return this.accessToken;
   }

   public login(username: string) {
     this.username.next(username);
   }

   public logout() {
     this.username.next(null);
     this.accessToken = null;
   }

   public isAuthenticated(): boolean {
     return this.accessToken !== null && this.accessToken !== undefined;
   }

   public getCurrentUserUsername(): string {
     return this.username.value;
   } 

   public getRedirectUrl(): string {
     return this.redirectUrl;
   }

   public setRedirectUrl(url: string) {
     this.redirectUrl = url;
   }
}

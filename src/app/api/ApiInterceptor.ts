import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    /**
     *
     */
    constructor(private authService: AuthService, private route : Router) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Apply the headers
        if (this.authService.isAuthenticated()) {
            req = req.clone({           
                setHeaders: {
                    'Authorization': `bearer ${this.authService.getToken().acces_token}`
                }
            });
            
        }
        // Also handle errors globally
        return next.handle(req).pipe(
            tap(x => x, err => {
                // Handle this err
                console.error(`Error performing request, status code = ${err.status}`);
                if(err.status == 403 || err.status == 415 || err.status == 500 || err.status == 0) this.route.navigate(['/error']);
            })
        );
    }
}
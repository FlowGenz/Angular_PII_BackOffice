import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NotificationBarService } from '../notification-bar.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    /**
     *
     */
    private errorMessage: string;

    constructor(private authService: AuthService, private route : Router, private notificationBarService: NotificationBarService) {

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
            tap(x => x, error => {
                // Handle this err
                console.error(`Error performing request, status code = ${error.status}`);
                //if(err.status == 403 || err.status == 415 || err.status == 500 || err.status == 0) this.route.navigate(['/error']);
                this.errorMessage = error;
                if (error.status == 401) this.errorMessage = "Login credentials not valid.";
                if (error.status == 403) this.errorMessage = "Access denied, you cannot access this.";
                this.notificationBarService.openNotificationBar(this.errorMessage);
            })
        );
    }
}
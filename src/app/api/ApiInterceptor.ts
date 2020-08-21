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
                this.errorMessage = error.message;
                if (error.status == 403 || error.status == 500) this.route.navigate(['/dressList']);
                if (error.status == 0) this.errorMessage = "Impossible to connect to the server. Please try again.";
                //if (error.status == 400) this.errorMessage = "An error occured with your request. Please try again.";
                if (error.status == 401) this.errorMessage = "Login credentials not valid.";
                if (error.status == 403) this.errorMessage = "Access denied, you cannot access this.";
                if (error.status == 404) this.errorMessage = "Nothing found.";
                if (error.status == 500) this.errorMessage = "An error occured server-side. We are doing our best to fix it.";
                this.notificationBarService.openNotificationBar(this.errorMessage);
            })
        );
    }
}
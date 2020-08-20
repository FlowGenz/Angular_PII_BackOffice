/* tslint:disable */
import { HttpClient, HttpParameterCodec, HttpParams, HttpErrorResponse, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { ApiConfiguration } from './api-configuration';
import { throwError, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

/**
 * Custom parameter codec to correctly handle the plus sign in parameter
 * values. See https://github.com/angular/angular/issues/18261
 */
class ParameterCodec implements HttpParameterCodec {
  encodeKey(key: string): string {
    return encodeURIComponent(key);
  }

  encodeValue(value: string): string {
    return encodeURIComponent(value);
  }

  decodeKey(key: string): string {
    return decodeURIComponent(key);
  }

  decodeValue(value: string): string {
    return decodeURIComponent(value);
  }
}
const PARAMETER_CODEC = new ParameterCodec();

/**
 * Base class for API services
 */
export class BaseService {
  constructor(
    protected config: ApiConfiguration,
    protected http: HttpClient
  ) {
  }

  //private _rootUrl: string = 'https://dressservice.azurewebsites.net';
  private _rootUrl: string = 'http://localhost:10839';

  /**
   * Returns the root url for API operations. If not set directly in this
   * service, will fallback to ApiConfiguration.rootUrl.
   */
  get rootUrl(): string {
    return this._rootUrl || this.config.rootUrl;
  }

  /**
   * Sets the root URL for API operations in this service.
   */
  set rootUrl(rootUrl: string) {
    this._rootUrl = rootUrl;
  }

  /**
   * Creates a new `HttpParams` with the correct codec
   */
  protected newParams(): HttpParams {
    return new HttpParams({
      encoder: PARAMETER_CODEC
    });
  }

  protected handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      /*console.error('An error occurred:', error.error.message);*/
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      /*console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);*/
    }
    // return an observable with a user-facing error message
    //alert(error.error);
    if (error.status == 401) return throwError("Login credentials not valid.");
    if (error.status == 403) return throwError("Access denied, you are not authorized to access this.");
    return throwError(
      error.error);
  };
}

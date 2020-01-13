/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter, catchError } from 'rxjs/operators';

import { DressOrderDTO } from '../models/dress-order-dto';
@Injectable({
  providedIn: 'root',
})
class OrderService extends __BaseService {
  static readonly getOrderPath = '/Order';
  static readonly postOrderPath = '/Order';
  static readonly putOrderPath = '/Order';
  static readonly deleteOrderPath = '/Order';
  static readonly getOrderUsernamePath = '/Order/{username}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  getOrderResponse(): __Observable<__StrictHttpResponse<Array<DressOrderDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Order`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<DressOrderDTO>>;
      }),
      catchError(this.handleError)
    );
  }
  /**
   * @return Success
   */
  getOrder(): __Observable<Array<DressOrderDTO>> {
    return this.getOrderResponse().pipe(
      __map(_r => _r.body as Array<DressOrderDTO>)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  postOrderResponse(body?: DressOrderDTO): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/Order`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: parseFloat((_r as HttpResponse<any>).body as string) }) as __StrictHttpResponse<number>
      }),
      catchError(this.handleError)
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  postOrder(body?: DressOrderDTO): __Observable<number> {
    return this.postOrderResponse(body).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  putOrderResponse(body?: DressOrderDTO): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/Order`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      }),
      catchError(this.handleError)
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  putOrder(body?: DressOrderDTO): __Observable<string> {
    return this.putOrderResponse(body).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  deleteOrderResponse(body?: string): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/Order`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      }),
      catchError(this.handleError)
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  deleteOrder(body?: string): __Observable<string> {
    return this.deleteOrderResponse(body).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param username undefined
   * @return Success
   */
  getOrderUsernameResponse(username: string): __Observable<__StrictHttpResponse<DressOrderDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Order/${username}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DressOrderDTO>;
      }),
      catchError(this.handleError)
    );
  }
  /**
   * @param username undefined
   * @return Success
   */
  getOrderUsername(username: string): __Observable<DressOrderDTO> {
    return this.getOrderUsernameResponse(username).pipe(
      __map(_r => _r.body as DressOrderDTO)
    );
  }
}

module OrderService {
}

export { OrderService }

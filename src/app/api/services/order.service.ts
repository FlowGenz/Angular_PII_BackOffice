/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { DressOrder } from '../models/dress-order';
@Injectable({
  providedIn: 'root',
})
class OrderService extends __BaseService {
  static readonly getOrderPath = '/Order';
  static readonly postOrderPath = '/Order';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  getOrderResponse(): __Observable<__StrictHttpResponse<Array<DressOrder>>> {
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
        return _r as __StrictHttpResponse<Array<DressOrder>>;
      })
    );
  }
  /**
   * @return Success
   */
  getOrder(): __Observable<Array<DressOrder>> {
    return this.getOrderResponse().pipe(
      __map(_r => _r.body as Array<DressOrder>)
    );
  }

  /**
   * @param body undefined
   */
  postOrderResponse(body?: DressOrder): __Observable<__StrictHttpResponse<null>> {
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
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param body undefined
   */
  postOrder(body?: DressOrder): __Observable<null> {
    return this.postOrderResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module OrderService {
}

export { OrderService }

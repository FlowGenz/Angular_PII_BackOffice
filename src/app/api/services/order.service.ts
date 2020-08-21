/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { DressOrderDTO } from '../models/dress-order-dto';
import { PaginationDressOrderDTO } from '../models/pagination-dress-order-dto';
@Injectable({
  providedIn: 'root',
})
class OrderService extends __BaseService {
  static readonly getOrderPath = '/Order';
  static readonly postOrderPath = '/Order';
  static readonly putOrderPath = '/Order';
  static readonly getOrderPageIndexPageSizePath = '/Order/{pageIndex}/{pageSize}';
  static readonly getOrderOrderIdPath = '/Order/{orderId}';
  static readonly deleteOrderDressOrderIdPath = '/Order/{dressOrderId}';
  private orderIdEdited: string;

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  setOrderIdEdited(orderIdEdited: string) {
    this.orderIdEdited = orderIdEdited;
  }

  getOrderIdEdited(): string {
    return this.orderIdEdited;
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
      })
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
      })
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
      })
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
   * @param params The `OrderService.GetOrderPageIndexPageSizeParams` containing the following parameters:
   *
   * - `pageSize`:
   *
   * - `pageIndex`:
   *
   * @return Success
   */
  getOrderPageIndexPageSizeResponse(params: OrderService.GetOrderPageIndexPageSizeParams): __Observable<__StrictHttpResponse<PaginationDressOrderDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Order/${params.pageIndex}/${params.pageSize}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PaginationDressOrderDTO>;
      })
    );
  }
  /**
   * @param params The `OrderService.GetOrderPageIndexPageSizeParams` containing the following parameters:
   *
   * - `pageSize`:
   *
   * - `pageIndex`:
   *
   * @return Success
   */
  getOrderPageIndexPageSize(params: OrderService.GetOrderPageIndexPageSizeParams): __Observable<PaginationDressOrderDTO> {
    return this.getOrderPageIndexPageSizeResponse(params).pipe(
      __map(_r => _r.body as PaginationDressOrderDTO)
    );
  }

  /**
   * @param orderId undefined
   * @return Success
   */
  getOrderOrderIdResponse(orderId: string): __Observable<__StrictHttpResponse<DressOrderDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Order/${orderId}`,
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
      })
    );
  }
  /**
   * @param orderId undefined
   * @return Success
   */
  getOrderOrderId(orderId: string): __Observable<DressOrderDTO> {
    return this.getOrderOrderIdResponse(orderId).pipe(
      __map(_r => _r.body as DressOrderDTO)
    );
  }

  /**
   * @param dressOrderId undefined
   * @return Success
   */
  deleteOrderDressOrderIdResponse(dressOrderId: string): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/Order/${dressOrderId}`,
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
      })
    );
  }
  /**
   * @param dressOrderId undefined
   * @return Success
   */
  deleteOrderDressOrderId(dressOrderId: string): __Observable<string> {
    return this.deleteOrderDressOrderIdResponse(dressOrderId).pipe(
      __map(_r => _r.body as string)
    );
  }
}

module OrderService {

  /**
   * Parameters for getOrderPageIndexPageSize
   */
  export interface GetOrderPageIndexPageSizeParams {
    pageSize: number;
    pageIndex: number;
  }
}

export { OrderService }

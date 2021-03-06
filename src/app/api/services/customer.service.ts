/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CustomerDTO } from '../models/customer-dto';
import { PaginationCustomerDTO } from '../models/pagination-customer-dto';
@Injectable({
  providedIn: 'root',
})
class CustomerService extends __BaseService {
  static readonly getCustomerPath = '/Customer';
  static readonly postCustomerPath = '/Customer';
  static readonly putCustomerPath = '/Customer';
  static readonly getCustomerPageIndexPageSizePath = '/Customer/{pageIndex}/{pageSize}';
  static readonly getCustomerUsernamePath = '/Customer/{username}';
  static readonly deleteCustomerCustomerIdPath = '/Customer/{customerId}';
  private customerEditedUsername: string;

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  setCustomerEditedUsername(username: string) {
    this.customerEditedUsername = username;
  }

  getCustomerEditedUsername(): string {
    return this.customerEditedUsername;
  }

  /**
   * @return Success
   */
  getCustomerResponse(): __Observable<__StrictHttpResponse<Array<CustomerDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Customer`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CustomerDTO>>;
      })
    );
  }
  /**
   * @return Success
   */
  getCustomer(): __Observable<Array<CustomerDTO>> {
    return this.getCustomerResponse().pipe(
      __map(_r => _r.body as Array<CustomerDTO>)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  postCustomerResponse(body?: CustomerDTO): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/Customer`,
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
  postCustomer(body?: CustomerDTO): __Observable<number> {
    return this.postCustomerResponse(body).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  putCustomerResponse(body?: CustomerDTO): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/Customer`,
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
  putCustomer(body?: CustomerDTO): __Observable<string> {
    return this.putCustomerResponse(body).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param params The `CustomerService.GetCustomerPageIndexPageSizeParams` containing the following parameters:
   *
   * - `pageSize`:
   *
   * - `pageIndex`:
   *
   * @return Success
   */
  getCustomerPageIndexPageSizeResponse(params: CustomerService.GetCustomerPageIndexPageSizeParams): __Observable<__StrictHttpResponse<PaginationCustomerDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Customer/${params.pageIndex}/${params.pageSize}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PaginationCustomerDTO>;
      })
    );
  }
  /**
   * @param params The `CustomerService.GetCustomerPageIndexPageSizeParams` containing the following parameters:
   *
   * - `pageSize`:
   *
   * - `pageIndex`:
   *
   * @return Success
   */
  getCustomerPageIndexPageSize(params: CustomerService.GetCustomerPageIndexPageSizeParams): __Observable<PaginationCustomerDTO> {
    return this.getCustomerPageIndexPageSizeResponse(params).pipe(
      __map(_r => _r.body as PaginationCustomerDTO)
    );
  }

  /**
   * @param username undefined
   * @return Success
   */
  getCustomerUsernameResponse(username: string): __Observable<__StrictHttpResponse<CustomerDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Customer/${username}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CustomerDTO>;
      })
    );
  }
  /**
   * @param username undefined
   * @return Success
   */
  getCustomerUsername(username: string): __Observable<CustomerDTO> {
    return this.getCustomerUsernameResponse(username).pipe(
      __map(_r => _r.body as CustomerDTO)
    );
  }

  /**
   * @param customerId undefined
   * @return Success
   */
  deleteCustomerCustomerIdResponse(customerId: string): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/Customer/${customerId}`,
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
   * @param customerId undefined
   * @return Success
   */
  deleteCustomerCustomerId(customerId: string): __Observable<string> {
    return this.deleteCustomerCustomerIdResponse(customerId).pipe(
      __map(_r => _r.body as string)
    );
  }
}

module CustomerService {

  /**
   * Parameters for getCustomerPageIndexPageSize
   */
  export interface GetCustomerPageIndexPageSizeParams {
    pageSize: number;
    pageIndex: number;
  }
}

export { CustomerService }

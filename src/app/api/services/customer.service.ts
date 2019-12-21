/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CustomerDTO } from '../models/customer-dto';
import { User } from '../models/user';
import { Favorites } from '../models/favorites';
import { DressOrder } from '../models/dress-order';
import { Dress } from '../models/dress';
@Injectable({
  providedIn: 'root',
})
class CustomerService extends __BaseService {
  static readonly getCustomerPath = '/Customer';
  static readonly postCustomerPath = '/Customer';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
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
   * @param params The `CustomerService.PostCustomerParams` containing the following parameters:
   *
   * - `Username`:
   *
   * - `UserPassword`:
   *
   * - `UserAddress`:
   *
   * - `PhoneNumber`:
   *
   * - `LoyaltyPoints`:
   *
   * - `LastName`:
   *
   * - `Id`:
   *
   * - `FirstName`:
   *
   * - `Favorites`:
   *
   * - `Email`:
   *
   * - `DressOrder`:
   *
   * - `Dress`:
   *
   * @return Success
   */
  postCustomerResponse(params: CustomerService.PostCustomerParams): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Username != null) __params = __params.set('Username', params.Username.toString());
    if (params.UserPassword != null) __params = __params.set('UserPassword', params.UserPassword.toString());
    if (params.UserAddress != null) __params = __params.set('UserAddress', params.UserAddress.toString());
    if (params.PhoneNumber != null) __params = __params.set('PhoneNumber', params.PhoneNumber.toString());
    if (params.LoyaltyPoints != null) __params = __params.set('LoyaltyPoints', params.LoyaltyPoints.toString());
    if (params.LastName != null) __params = __params.set('LastName', params.LastName.toString());
    if (params.Id != null) __params = __params.set('Id', params.Id.toString());
    if (params.FirstName != null) __params = __params.set('FirstName', params.FirstName.toString());
    (params.Favorites || []).forEach(val => {if (val != null) __params = __params.append('Favorites', val.toString())});
    if (params.Email != null) __params = __params.set('Email', params.Email.toString());
    (params.DressOrder || []).forEach(val => {if (val != null) __params = __params.append('DressOrder', val.toString())});
    (params.Dress || []).forEach(val => {if (val != null) __params = __params.append('Dress', val.toString())});
    let req = new HttpRequest<any>(
      'POST',
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
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * @param params The `CustomerService.PostCustomerParams` containing the following parameters:
   *
   * - `Username`:
   *
   * - `UserPassword`:
   *
   * - `UserAddress`:
   *
   * - `PhoneNumber`:
   *
   * - `LoyaltyPoints`:
   *
   * - `LastName`:
   *
   * - `Id`:
   *
   * - `FirstName`:
   *
   * - `Favorites`:
   *
   * - `Email`:
   *
   * - `DressOrder`:
   *
   * - `Dress`:
   *
   * @return Success
   */
  postCustomer(params: CustomerService.PostCustomerParams): __Observable<User> {
    return this.postCustomerResponse(params).pipe(
      __map(_r => _r.body as User)
    );
  }
}

module CustomerService {

  /**
   * Parameters for postCustomer
   */
  export interface PostCustomerParams {
    Username?: string;
    UserPassword?: string;
    UserAddress?: string;
    PhoneNumber?: string;
    LoyaltyPoints?: number;
    LastName?: string;
    Id?: number;
    FirstName?: string;
    Favorites?: Array<Favorites>;
    Email?: string;
    DressOrder?: Array<DressOrder>;
    Dress?: Array<Dress>;
  }
}

export { CustomerService }

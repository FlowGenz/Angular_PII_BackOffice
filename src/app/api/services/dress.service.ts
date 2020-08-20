/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { DressDTO } from '../models/dress-dto';
@Injectable({
  providedIn: 'root',
})
class DressService extends __BaseService {
  static readonly getDressPath = '/Dress';
  static readonly postDressPath = '/Dress';
  static readonly putDressPath = '/Dress';
  static readonly getDressPageIndexPageSizePath = '/Dress/{pageIndex}/{pageSize}';
  static readonly getDressIdPath = '/Dress/{id}';
  static readonly deleteDressDressIdPath = '/Dress/{dressId}';
  private dressIdEdited: string;

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  setDressIdEdited(dressIdEdited: string) {
    this.dressIdEdited = dressIdEdited;
  }

  getDressIdEdited(): string {
    return this.dressIdEdited;
  }

  /**
   * @return Success
   */
  getDressResponse(): __Observable<__StrictHttpResponse<Array<DressDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Dress`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<DressDTO>>;
      })
    );
  }
  /**
   * @return Success
   */
  getDress(): __Observable<Array<DressDTO>> {
    return this.getDressResponse().pipe(
      __map(_r => _r.body as Array<DressDTO>)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  postDressResponse(body?: DressDTO): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/Dress`,
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
  postDress(body?: DressDTO): __Observable<string> {
    return this.postDressResponse(body).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  putDressResponse(body?: DressDTO): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/Dress`,
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
  putDress(body?: DressDTO): __Observable<string> {
    return this.putDressResponse(body).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param params The `DressService.GetDressPageIndexPageSizeParams` containing the following parameters:
   *
   * - `pageSize`:
   *
   * - `pageIndex`:
   *
   * @return Success
   */
  getDressPageIndexPageSizeResponse(params: DressService.GetDressPageIndexPageSizeParams): __Observable<__StrictHttpResponse<Array<DressDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Dress/${params.pageIndex}/${params.pageSize}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<DressDTO>>;
      })
    );
  }
  /**
   * @param params The `DressService.GetDressPageIndexPageSizeParams` containing the following parameters:
   *
   * - `pageSize`:
   *
   * - `pageIndex`:
   *
   * @return Success
   */
  getDressPageIndexPageSize(params: DressService.GetDressPageIndexPageSizeParams): __Observable<Array<DressDTO>> {
    return this.getDressPageIndexPageSizeResponse(params).pipe(
      __map(_r => _r.body as Array<DressDTO>)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  getDressIdResponse(id: string): __Observable<__StrictHttpResponse<DressDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Dress/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DressDTO>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  getDressId(id: string): __Observable<DressDTO> {
    return this.getDressIdResponse(id).pipe(
      __map(_r => _r.body as DressDTO)
    );
  }

  /**
   * @param dressId undefined
   * @return Success
   */
  deleteDressDressIdResponse(dressId: string): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/Dress/${dressId}`,
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
   * @param dressId undefined
   * @return Success
   */
  deleteDressDressId(dressId: string): __Observable<string> {
    return this.deleteDressDressIdResponse(dressId).pipe(
      __map(_r => _r.body as string)
    );
  }
}

module DressService {

  /**
   * Parameters for getDressPageIndexPageSize
   */
  export interface GetDressPageIndexPageSizeParams {
    pageSize: number;
    pageIndex: number;
  }
}

export { DressService }

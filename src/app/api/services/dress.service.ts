/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { DressDTO } from '../models/dress-dto';
import { Dress } from '../models/dress';
@Injectable({
  providedIn: 'root',
})
class DressService extends __BaseService {
  static readonly getDressPath = '/Dress';
  static readonly postDressPath = '/Dress';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
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
   */
  postDressResponse(body?: Dress): __Observable<__StrictHttpResponse<null>> {
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
  postDress(body?: Dress): __Observable<null> {
    return this.postDressResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module DressService {
}

export { DressService }

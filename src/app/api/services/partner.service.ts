/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter, catchError } from 'rxjs/operators';

import { PartnerDTO } from '../models/partner-dto';
@Injectable({
  providedIn: 'root',
})
class PartnerService extends __BaseService {
  static readonly getPartnerPath = '/Partner';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  getPartnerResponse(): __Observable<__StrictHttpResponse<Array<PartnerDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Partner`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<PartnerDTO>>;
      }),
      catchError(this.handleError)
    );
  }
  /**
   * @return Success
   */
  getPartner(): __Observable<Array<PartnerDTO>> {
    return this.getPartnerResponse().pipe(
      __map(_r => _r.body as Array<PartnerDTO>)
    );
  }
}

module PartnerService {
}

export { PartnerService }

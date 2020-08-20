/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter, catchError } from 'rxjs/operators';

import { JwtDTO } from '../models/jwt-dto';
import { LoginDTO } from '../models/login-dto';

@Injectable({
  providedIn: 'root',
})
class JwtService extends __BaseService {
  static readonly postJwtPath = '/Jwt';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param body undefined
   * @return Success
   */
  postJwtResponse(body?: LoginDTO): __Observable<__StrictHttpResponse<JwtDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/Jwt`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<JwtDTO>;
      }),
      catchError(this.handleError)
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  postJwt(body?: LoginDTO): __Observable<JwtDTO> {
    return this.postJwtResponse(body).pipe(
      __map(_r => _r.body as JwtDTO)
    );
  }
}

module JwtService {
}

export { JwtService }

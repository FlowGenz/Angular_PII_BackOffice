/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { FavoriteDTO } from '../models/favorite-dto';
import { Favorites } from '../models/favorites';
@Injectable({
  providedIn: 'root',
})
class FavoriteService extends __BaseService {
  static readonly getFavoritePath = '/Favorite';
  static readonly postFavoritePath = '/Favorite';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  getFavoriteResponse(): __Observable<__StrictHttpResponse<Array<FavoriteDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Favorite`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<FavoriteDTO>>;
      })
    );
  }
  /**
   * @return Success
   */
  getFavorite(): __Observable<Array<FavoriteDTO>> {
    return this.getFavoriteResponse().pipe(
      __map(_r => _r.body as Array<FavoriteDTO>)
    );
  }

  /**
   * @param body undefined
   */
  postFavoriteResponse(body?: Favorites): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/Favorite`,
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
  postFavorite(body?: Favorites): __Observable<null> {
    return this.postFavoriteResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module FavoriteService {
}

export { FavoriteService }

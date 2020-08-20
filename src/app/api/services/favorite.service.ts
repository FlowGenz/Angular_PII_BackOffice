/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { FavoriteDTO } from '../models/favorite-dto';
import { FavoriteDressDTO } from '../models/favorite-dress-dto';
@Injectable({
  providedIn: 'root',
})
class FavoriteService extends __BaseService {
  static readonly getFavoriteUsernamePath = '/Favorite/{username}';
  static readonly getFavoriteUsernameDressIdPath = '/Favorite/{username}/{dressId}';
  static readonly postFavoritePath = '/Favorite';
  static readonly deleteFavoriteFavoriteIDPath = '/Favorite/{favoriteID}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param username undefined
   * @return Success
   */
  getFavoriteUsernameResponse(username: string): __Observable<__StrictHttpResponse<FavoriteDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Favorite/${username}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<FavoriteDTO>;
      })
    );
  }
  /**
   * @param username undefined
   * @return Success
   */
  getFavoriteUsername(username: string): __Observable<FavoriteDTO> {
    return this.getFavoriteUsernameResponse(username).pipe(
      __map(_r => _r.body as FavoriteDTO)
    );
  }

  /**
   * @param params The `FavoriteService.GetFavoriteUsernameDressIdParams` containing the following parameters:
   *
   * - `username`:
   *
   * - `dressId`:
   *
   * @return Success
   */
  getFavoriteUsernameDressIdResponse(params: FavoriteService.GetFavoriteUsernameDressIdParams): __Observable<__StrictHttpResponse<FavoriteDressDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Favorite/${params.username}/${params.dressId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<FavoriteDressDTO>;
      })
    );
  }
  /**
   * @param params The `FavoriteService.GetFavoriteUsernameDressIdParams` containing the following parameters:
   *
   * - `username`:
   *
   * - `dressId`:
   *
   * @return Success
   */
  getFavoriteUsernameDressId(params: FavoriteService.GetFavoriteUsernameDressIdParams): __Observable<FavoriteDressDTO> {
    return this.getFavoriteUsernameDressIdResponse(params).pipe(
      __map(_r => _r.body as FavoriteDressDTO)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  postFavoriteResponse(body?: FavoriteDTO): __Observable<__StrictHttpResponse<string>> {
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
  postFavorite(body?: FavoriteDTO): __Observable<string> {
    return this.postFavoriteResponse(body).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param params The `FavoriteService.DeleteFavoriteFavoriteIDParams` containing the following parameters:
   *
   * - `favoriteID`:
   *
   * - `body`:
   *
   * @return Success
   */
  deleteFavoriteFavoriteIDResponse(params: FavoriteService.DeleteFavoriteFavoriteIDParams): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/Favorite/${params.favoriteID}`,
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
   * @param params The `FavoriteService.DeleteFavoriteFavoriteIDParams` containing the following parameters:
   *
   * - `favoriteID`:
   *
   * - `body`:
   *
   * @return Success
   */
  deleteFavoriteFavoriteID(params: FavoriteService.DeleteFavoriteFavoriteIDParams): __Observable<string> {
    return this.deleteFavoriteFavoriteIDResponse(params).pipe(
      __map(_r => _r.body as string)
    );
  }
}

module FavoriteService {

  /**
   * Parameters for getFavoriteUsernameDressId
   */
  export interface GetFavoriteUsernameDressIdParams {
    username: string;
    dressId: string;
  }

  /**
   * Parameters for deleteFavoriteFavoriteID
   */
  export interface DeleteFavoriteFavoriteIDParams {
    favoriteID: string;
    body?: string;
  }
}

export { FavoriteService }

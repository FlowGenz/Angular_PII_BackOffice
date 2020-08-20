/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { CustomerService } from './services/customer.service';
import { DressService } from './services/dress.service';
import { FavoriteService } from './services/favorite.service';
import { JwtService } from './services/jwt.service';
import { OrderService } from './services/order.service';
import { PartnerService } from './services/partner.service';
import { SentenceService } from './services/sentence.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    CustomerService,
    DressService,
    FavoriteService,
    JwtService,
    OrderService,
    PartnerService,
    SentenceService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}

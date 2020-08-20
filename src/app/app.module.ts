import { BrowserModule } from '@angular/platform-browser';
import { NgModule, forwardRef } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { DressListComponent } from './dress-list/dress-list.component';
import { DressFormComponent } from './dress-form/dress-form.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConnectionScreenComponent } from './connection-screen/connection-screen.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { getFrenchPaginatorIntl } from './french-paginator-intl';
import { MatPaginatorIntl } from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiModule } from './api/api.module';
import { ApiInterceptor } from './api/ApiInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerFormComponent,
    DressListComponent,
    DressFormComponent,
    OrderListComponent,
    OrderFormComponent,
    ConnectionScreenComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    ApiModule.forRoot({rootUrl:"http://localhost:10839"})
  ],

  //Ce renseigner sur providers
  providers: [ 
    { provide:MatPaginatorIntl, useValue: getFrenchPaginatorIntl() },
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

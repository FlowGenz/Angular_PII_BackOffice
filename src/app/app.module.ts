import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { DressListComponent } from './dress-list/dress-list.component';
import { DressFormComponent } from './dress-form/dress-form.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material'; 
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerFormComponent,
    DressListComponent,
    DressFormComponent,
    OrderListComponent,
    OrderFormComponent,
    MatTableModule,
    HttpClientModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

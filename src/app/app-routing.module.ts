import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { DressListComponent } from './dress-list/dress-list.component';
import { OrderListComponent } from './order-list/order-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { DressFormComponent } from './dress-form/dress-form.component';


const routes: Routes = [
  {path: '', component: RegisterComponent},
  {path: 'customerList', component: CustomerListComponent},
  {path: 'customerForm', component: CustomerFormComponent},
  {path: 'dressList', component: DressListComponent},
  {path: 'dressForm', component: DressFormComponent},
  {path: 'orderList', component: OrderListComponent},
  {path: 'orderForm', component: OrderFormComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

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
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'customerList', component: CustomerListComponent, canActivate: [AuthGuard]},
  {path: 'customerForm', component: CustomerFormComponent, canActivate: [AuthGuard]},
  {path: 'dressList', component: DressListComponent, canActivate: [AuthGuard]},
  {path: 'dressForm', component: DressFormComponent, canActivate: [AuthGuard]},
  {path: 'orderList', component: OrderListComponent, canActivate: [AuthGuard]},
  {path: 'orderForm', component: OrderFormComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  //{path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

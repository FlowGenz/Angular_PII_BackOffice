import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectionScreenComponent } from './connection-screen/connection-screen.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { DressListComponent } from './dress-list/dress-list.component';
import { OrderListComponent } from './order-list/order-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path: '', component: ConnectionScreenComponent},
  {path: 'customerList', component: CustomerListComponent},
  {path: 'dressList', component: DressListComponent},
  {path: 'orderList', component: OrderListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

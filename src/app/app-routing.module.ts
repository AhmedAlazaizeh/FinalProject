import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { CustomerModule } from './customer/customer.module';
import { InfluncerModule } from './influncer/influncer.module';
import { AdminGuard } from './guards/admin/admin.guard';
import { AccountantGuard } from './guards/accountant/accountant.guard';
import { AccountantModule } from './accountant/accountant.module';
import { InfluncerGuard } from './guards/influncer/influncer.guard';
import { DeliveryModule } from './delivery/delivery.module';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: '',
    loadChildren : () => CustomerModule
  },
  {
    path: 'Admin',
    loadChildren : () => AdminModule//, canActivate:[AdminGuard]
  },
  {
    path: 'Delivery',
    loadChildren : () => DeliveryModule//, canActivate:[DeliveryModule]
  },
  {
    path: 'Influncer',
    loadChildren : () => InfluncerModule//, canActivate:[InfluncerGuard]
  },
  {
    path: 'Accountant',
    loadChildren : () => AccountantModule//, canActivate:[AccountantGuard]
  },
  {
    path: 'Auth',
    loadChildren : () => AuthModule
  },
  {
    path: 'test',
    component: TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

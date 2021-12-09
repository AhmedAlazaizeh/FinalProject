import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { CustomerModule } from './customer/customer.module';
import { DeveloperModule } from './developer/developer.module';
import { InfluncerModule } from './influncer/influncer.module';
import { AdminGuard } from './guards/admin/admin.guard';
import { DeveloperGuard } from './guards/developer/developer.guard';
import { AccountantGuard } from './guards/accountant/accountant.guard';
import { AccountantModule } from './accountant/accountant.module';
import { InfluncerGuard } from './guards/influncer/influncer.guard';

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
    path: 'Developer',
    loadChildren : () => DeveloperModule//, canActivate:[DeveloperGuard]
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

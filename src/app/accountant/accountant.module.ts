import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountantRoutingModule } from './accountant-routing.module';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { InfluncersComponent } from './influncers/influncers.component';
import { EmployeesComponent } from './employees/employees.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    HomeComponent,
    CustomersComponent,
    InfluncersComponent,
    EmployeesComponent,
    HeaderComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AccountantRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    NgChartsModule
  ]
})
export class AccountantModule { }

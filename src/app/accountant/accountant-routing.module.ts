import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from '../admin/employee/employee.component';
import { HomeComponent } from '../accountant/home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { EmployeesComponent } from './employees/employees.component';
import { InfluncersComponent } from './influncers/influncers.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "employees",
    component: EmployeesComponent
  },
  {
    path: "customers",
    component: CustomersComponent
  },
  {
    path: "influncers",
    component: InfluncersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountantRoutingModule { }

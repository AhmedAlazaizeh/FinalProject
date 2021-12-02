import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SystemComponent } from './system/system.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    HomeComponent,
    EmployeeComponent,
    FeedbackComponent,
    SystemComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

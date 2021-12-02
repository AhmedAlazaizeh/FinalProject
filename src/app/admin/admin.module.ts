import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProfilecomponentComponent } from './profilecomponent/profilecomponent.component';
import { BillingcomponentComponent } from './billingcomponent/billingcomponent.component';
import { NotificationscomponentComponent } from './notificationscomponent/notificationscomponent.component';
import { RtlcomponentComponent } from './rtlcomponent/rtlcomponent.component';
import { TabelscomponentComponent } from './tabelscomponent/tabelscomponent.component';
import { SignIncomponentComponent } from './sign-incomponent/sign-incomponent.component';
import { SignUpcomponentComponent } from './sign-upcomponent/sign-upcomponent.component';
import { DashboardcomponentComponent } from './dashboardcomponent/dashboardcomponent.component';
import { NavcomponentComponent } from './navcomponent/navcomponent.component';
import { SidecomponentComponent } from './sidecomponent/sidecomponent.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { FeedbackcomponentComponent } from './feedbackcomponent/feedbackcomponent.component';
import { EmployeebackcomponentComponent } from './employeebackcomponent/employeebackcomponent.component';
import { EmployeecomponentComponent } from './employeecomponent/employeecomponent.component';


@NgModule({
  declarations: [
    ProfilecomponentComponent,
    BillingcomponentComponent,
    NotificationscomponentComponent,
    RtlcomponentComponent,
    TabelscomponentComponent,
    SignIncomponentComponent,
    SignUpcomponentComponent,
    DashboardcomponentComponent,
    NavcomponentComponent,
    SidecomponentComponent,
    HomecomponentComponent,
    FeedbackcomponentComponent,
    EmployeebackcomponentComponent,
    EmployeecomponentComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

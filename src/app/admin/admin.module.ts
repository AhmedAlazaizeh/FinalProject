import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SystemComponent } from './system/system.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    HomeComponent,
    EmployeeComponent,
    FeedbackComponent,
    SystemComponent,
    ProfileComponent,
    HeaderComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    MatDialogModule
  ]
})
export class AdminModule { }

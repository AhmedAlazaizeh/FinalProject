import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfluncerRoutingModule } from './influncer-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileComponent } from './profile/profile.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    InfluncerRoutingModule,
    ReactiveFormsModule,
    MatDialogModule
  ]
})
export class InfluncerModule { }

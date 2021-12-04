import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfluncerRoutingModule } from './influncer-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    InfluncerRoutingModule
  ]
})
export class InfluncerModule { }

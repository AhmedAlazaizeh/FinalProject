import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeveloperRoutingModule } from './developer-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    DeveloperRoutingModule
  ]
})
export class DeveloperModule { }

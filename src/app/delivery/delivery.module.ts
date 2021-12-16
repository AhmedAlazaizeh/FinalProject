import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryRoutingModule } from './delivery-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    DeliveryRoutingModule
  ]
})
export class DeliveryModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryRoutingModule } from './delivery-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { GoogleMap } from './google-map.control/google-map.control.component';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    GoogleMap
  ],
  imports: [
    CommonModule,
    DeliveryRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    NgxSpinnerModule
  ]
})
export class DeliveryModule { }

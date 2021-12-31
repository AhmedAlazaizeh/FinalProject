import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from '../auth/header/header.component';
import { FooterComponent } from '../auth/footer/footer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ToastrService } from 'ngx-toastr';
import { GoogleMapControlComponent } from './google-map/google-map.control.component';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    GoogleMapControlComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    NgxSpinnerModule
  ]
})
export class AuthModule { }

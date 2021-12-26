import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  token: string | any
  data: any = [{}]


  constructor(private http:HttpClient, private toaster: ToastrService) { }

  getToken(form: any){

    const headerDict = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

      this.http.post("https://localhost:44309/api/JWT/auth", form, requestOptions).subscribe((Response: any)=>{this.token=Response},err=>{
        this.toaster.error("Wronge username or password!")
      }
      )
      console.log(this.token)
    }

  getUserByUsername(username: string){
    this.http.get("https://localhost:44309/api/User/getUserByUsername/" + username).subscribe((Response: any)=>{this.data=Response})
  }
}

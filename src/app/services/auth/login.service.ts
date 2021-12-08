import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  token: any | string

  constructor(private http:HttpClient) { }

  getToken(form: any){

    const headerDict = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    this.http.post("https://localhost:44309/api/JWT/auth", form, requestOptions).subscribe((Response: any)=>{this.token=Response})
    console.log(this.token)
  }
}

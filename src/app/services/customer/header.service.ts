import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  data: any | string
  un = localStorage.getItem("username")
  username = [{"username": this.un}]
  constructor(private http:HttpClient) { }

  getUsername(){

    const headerDict = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    this.http.post("https://localhost:44309/api/User/getUserByUsername", this.username, requestOptions).subscribe((Response: any)=>{this.data=Response})
    console.log(this.data.username)

  }
}

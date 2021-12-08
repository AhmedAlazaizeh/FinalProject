import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  data: any = [{}]

  constructor(private http:HttpClient) { }

  getSystemInfo(){
    this.http.get("https://localhost:44309/api/IAmAnInfluncer/GetAll").subscribe((Response: any)=>{this.data=Response})
  }
}

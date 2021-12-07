import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  data: any = [{}]
  constructor(private http:HttpClient) { }


  getAllProducts(){
    this.http.get("https://localhost:44309/api/Product/GetAll").subscribe((Response: any)=>{this.data=Response})
  }

}

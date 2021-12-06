import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  data: any = [{}]

  constructor(private http:HttpClient) { }

  customersList(){
    this.http.get("https://localhost:44309/api/User/customersList").subscribe((Response: any)=>{this.data=Response})
  }

}

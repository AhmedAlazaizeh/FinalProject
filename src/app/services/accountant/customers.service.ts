import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  data: any = [{}]
  data1: any | string = [{}]

  constructor(private http:HttpClient) { }

  customersList(){
    this.http.get("https://localhost:44309/api/User/customersList").subscribe((Response: any)=>{this.data=Response})
  }


  getUserByUsername(username: string){
    if (username != null) {
      this.http.get("https://localhost:44309/api/User/getUserByUsername/" + username).subscribe((Response: any)=>{this.data1=Response})
    }else{
      this.data1 = null
    }

  }
}

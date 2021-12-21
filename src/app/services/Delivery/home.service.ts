import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  orderListData: any = [{}]
  data1: any | string = [{}]

  constructor(private http: HttpClient) { }

  getOrderLsit(){
    this.http.get("https://localhost:44309/api/Order/ordersList").subscribe((Response: any)=>{this.orderListData=Response})
  }

  getUserByUsername(username: string){
    if (username != null) {
      this.http.get("https://localhost:44309/api/User/getUserByUsername/" + username).subscribe((Response: any)=>{this.data1=Response})
    }else{
      this.data1 = null
    }
  }

  delivered(ID: number){
    this.http.get("https://localhost:44309/api/Order/Delivered/" + ID).subscribe((Response: any)=>{})
  }

  notDelivered(ID: number){
    this.http.get("https://localhost:44309/api/Order/notDelivered/" + ID).subscribe((Response: any)=>{})
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  orderListData: any = [{}]

  constructor(private http: HttpClient) { }

  getOrderLsit(){
    this.http.get("https://localhost:44309/api/Order/ordersList").subscribe((Response: any)=>{this.orderListData=Response})
  }
}

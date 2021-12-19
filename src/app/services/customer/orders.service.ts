import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  userOrderList: any = [{}]
  sumOfMyOrdersData: any = {}

  constructor(public http: HttpClient) { }

  getOrderList(ID: number){
    this.http.get("https://localhost:44309/api/Order/orderList/" + ID).subscribe((Response: any)=>{this.userOrderList=Response})
  }

  sumOfMyOrders(ID: number){
    this.http.get("https://localhost:44309/api/Order/sumOfMyOrders/" + ID).subscribe((Response: any)=>{this.sumOfMyOrdersData=Response})
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  countOfEmployees: any = {}
  countOfCustomers: any = {}
  countOfInfluncers: any = {}
  countOfFeedback: any = {}
  orderListData: any = [{}]
  financialData: any = [{}]
  constructor( private http: HttpClient) { }

  getCountOfEmployees(){
    this.http.get("https://localhost:44309/api/User/countOfEmployees").subscribe((Response: any)=>{this.countOfEmployees=Response})
  }

  getCountOfCustomers(){
    this.http.get("https://localhost:44309/api/User/countOfCustomers").subscribe((Response: any)=>{this.countOfCustomers=Response})
  }

  getCountOfInfluncers(){
    this.http.get("https://localhost:44309/api/User/countOfInfluncers").subscribe((Response: any)=>{this.countOfInfluncers=Response})
  }


  getCountOfFeedback(){
    this.http.get("https://localhost:44309/api/Feedback/countOfFeedback").subscribe((Response: any)=>{this.countOfFeedback=Response})
  }

  getOrderLsit(){
    this.http.get("https://localhost:44309/api/Order/ordersList").subscribe((Response: any)=>{this.orderListData=Response})
  }

  getFinancialList(){
    this.http.get("https://localhost:44309/api/User/GetFinancial").subscribe((Response: any)=>{this.financialData=Response})
  }
}

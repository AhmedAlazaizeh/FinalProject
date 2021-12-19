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
  sumOfSales: any = {}
  sumOfRevune: any = {}
  countOfOrders: any = {}
  countOfActiveProducts: any = {}
  orderListData: any = [{}]
  financialData: any = [{}]

  data1: any | string = [{}]

  un = localStorage.getItem("username")
  username = [{"username": this.un}]

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

  getSumOfSales(){
    this.http.get("https://localhost:44309/api/Order/sumOfSales").subscribe((Response: any)=>{this.sumOfSales=Response})
  }

  getSumOfRevune(){
    this.http.get("https://localhost:44309/api/Order/sumOfRevune").subscribe((Response: any)=>{
      this.sumOfRevune["sumOfRevune"] = Math.round(Response["sumOfRevune"] * 100) / 100
  })
  }

  getOrderLsit(){
    this.http.get("https://localhost:44309/api/Order/ordersList").subscribe((Response: any)=>{this.orderListData=Response})
  }

  getFinancialList(){
    this.http.get("https://localhost:44309/api/User/GetFinancial").subscribe((Response: any)=>{this.financialData=Response})
  }

  getCountOfOrders(){
    this.http.get("https://localhost:44309/api/Order/countOfOrders").subscribe((Response: any)=>{this.countOfOrders=Response})
  }

  getCountOfActiveProducts(){
    this.http.get("https://localhost:44309/api/Product/countOfAvailableProducts").subscribe((Response: any)=>{this.countOfActiveProducts=Response})
  }

  getUserByUsername(username: string){
    if (username != null) {
      this.http.get("https://localhost:44309/api/User/getUserByUsername/" + username).subscribe((Response: any)=>{this.data1=Response})
    }else{
      this.data1 = null
    }

  }
}

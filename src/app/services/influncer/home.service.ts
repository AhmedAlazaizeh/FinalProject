import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  myOrdersData: any = [{}]
  data1: any | string = [{}]

  sumOfSales: any = {}
  sumOfRevune: any = {}
  countOfOrders: any = {}
  countOfActiveProducts: any = {}

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  getMyOrders(ID: number){
    this.http.get("https://localhost:44309/api/Order/influncerOrdersList/" + ID).subscribe((Response: any)=>{this.myOrdersData=Response})
  }

  getUserByUsername(username: string){
    if (username != null) {
      this.http.get("https://localhost:44309/api/User/getUserByUsername/" + username).subscribe((Response: any)=>{this.data1=Response})
    }else{
      this.data1 = null
    }
  }

  getSumOfSales(ID: number){
    this.http.get("https://localhost:44309/api/Order/sumOfInfluncerSales/" + ID).subscribe((Response: any)=>{this.sumOfSales=Response})
  }

  getSumOfRevune(ID: number){
    this.http.get("https://localhost:44309/api/Order/sumOfInfluncerRevune/" + ID).subscribe((Response: any)=>{
      this.sumOfRevune["sumOfRevune"] = Math.round(Response["sumOfRevune"] * 100) / 100
  })
  }

  getCountOfOrders(ID: number){
    this.http.get("https://localhost:44309/api/Order/countOfInfluncerOrders/" + ID).subscribe((Response: any)=>{this.countOfOrders=Response})
  }

  getCountOfActiveProducts(ID: number){
    this.http.get("https://localhost:44309/api/Product/countOfInfluncerProducts/" + ID).subscribe((Response: any)=>{this.countOfActiveProducts=Response})
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  cartList: any = [{}]
  sumOfCart: any = {}
  data1: any | string = [{}]
  paymentResponse: any = {}

  constructor(private http: HttpClient) { }

  getCartList(ID: number){
    this.http.get("https://localhost:44309/api/Order/cartList/" + ID).subscribe((Response: any)=>{this.cartList=Response})
  }

  getSumOfCart(ID: number){
    this.http.get("https://localhost:44309/api/Order/sumOfCart/" + ID).subscribe((Response: any)=>{this.sumOfCart=Response
    localStorage.setItem("sumOfCart", Response["sumOfCart"])
    })

  }

  getUserByUsername(username: string){
    if (username != null) {
      this.http.get("https://localhost:44309/api/User/getUserByUsername/" + username).subscribe((Response: any)=>{this.data1=Response})
    }else{
      this.data1 = null
    }
  }

  async pay(form: FormGroup){

    const headerDict = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

      this.http.post("https://localhost:44309/api/BankAccount/Pay", form, requestOptions).subscribe((Response: any)=>{this.paymentResponse=Response
      localStorage.setItem("paymentFlag", "True")
      }
      ,err=>{
        this.paymentResponse = null
        localStorage.setItem("paymentFlag", "False")
      })
  }

  clearCart(ID: number){

    const headerDict = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    this.http.post("https://localhost:44309/api/Order/clearCart/" + ID, requestOptions).subscribe((Response: any)=>{console.log(Response)})
  }
}

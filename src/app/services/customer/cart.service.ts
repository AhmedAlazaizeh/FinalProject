import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartList: any = [{}]
  sumOfCart: any = {}
  countOfCart: any = {}

  constructor(private http: HttpClient) { }

  getCartList(ID: number){
    this.http.get("https://localhost:44309/api/Order/cartList/" + ID).subscribe((Response: any)=>{this.cartList=Response})
  }

  getSumOfCart(ID: number){
    this.http.get("https://localhost:44309/api/Order/sumOfCart/" + ID).subscribe((Response: any)=>{this.sumOfCart=Response})
  }

  removeFromCart(form: FormGroup){

    const headerDict = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };

    this.http.post("https://localhost:44309/api/Order/removeFromcart", form, requestOptions).subscribe((res)=>{console.log(res)})
  }

  getCartCount(ID: number){
    this.http.get("https://localhost:44309/api/Order/countOfCart/" + ID).subscribe((Response: any)=>{this.countOfCart=Response})
  }
}

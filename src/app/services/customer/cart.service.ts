import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartList: any = [{}]
  sumOfCart: any = {}

  constructor(private http: HttpClient) { }

  getCartList(ID: number){
    this.http.get("https://localhost:44309/api/Order/cartList/" + ID).subscribe((Response: any)=>{this.cartList=Response})
  }

  getSumOfCart(ID: number){
    this.http.get("https://localhost:44309/api/Order/sumOfCart/" + ID).subscribe((Response: any)=>{this.sumOfCart=Response})
  }
}

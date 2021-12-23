import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/customer/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    var ID = localStorage.getItem("userID")
    this.getCartList(ID)
    this.getSumOfCart(ID)
  }

  getCartList(ID: any){
    this.cartService.getCartList(ID)
  }

  getSumOfCart(ID: any){
    this.cartService.getSumOfCart(ID)
  }

  public createImgPath = (serverPath: string) => {
    return "https://localhost:44309/" + serverPath;
  }
}

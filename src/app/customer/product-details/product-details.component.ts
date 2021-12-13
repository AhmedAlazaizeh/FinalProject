import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductDetailsService } from 'src/app/services/customer/product-details.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  cartItemForm: FormGroup = new FormGroup({
    orderDate: new FormControl(Date.now()),
    isOrder: new FormControl(0),
    orderValue: new FormControl(0),
    userID: new FormControl(localStorage.getItem("userID")),
    productID: new FormControl(localStorage.getItem("productID"))
  })

  loggedUserID: any = localStorage.getItem("userID")

  constructor(public productService: ProductDetailsService) { }

  ngOnInit(): void {
    var ID = localStorage.getItem("productID")
    this.getDetails(ID)
  }

  getDetails(ID: any){
   this.productService.getDetails(ID)
  }

  addToCart(){
    this.productService.addToCart(this.cartItemForm)
  }
}

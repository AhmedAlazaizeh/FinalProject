import { Component, OnInit } from '@angular/core';
import { ProductDetailsService } from 'src/app/services/customer/product-details.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  loggedUserID: any = localStorage.getItem("userID")

  constructor(public productService: ProductDetailsService) { }

  ngOnInit(): void {
    var ID = localStorage.getItem("productID")
    this.getDetails(ID)
  }

  getDetails(ID: any){
   this.productService.getDetails(ID)
  }
}

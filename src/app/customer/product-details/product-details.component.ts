import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductDetailsService } from 'src/app/services/customer/product-details.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  dateTime = new Date()
  formattedDateTime: string = ""

  cartItemForm: FormGroup = new FormGroup({
    isOrder: new FormControl(false),
    orderValue: new FormControl(0),
    userID: new FormControl(Number(localStorage.getItem("userID"))),
    productID: new FormControl(Number(localStorage.getItem("productID"))),
    isDelivered: new FormControl(false)
  })

  loggedUserID: any = localStorage.getItem("userID")

  constructor(public productService: ProductDetailsService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    var ID = localStorage.getItem("productID")
    this.getDetails(ID)
  }


  getDetails(ID: any){
   this.productService.getDetails(ID)
  }

  addToCart(){
    this.productService.addToCart(this.cartItemForm.value)
    this.toastr.success("Item Added To cart!")
    this.router.navigate(["/shop"])
  }
}

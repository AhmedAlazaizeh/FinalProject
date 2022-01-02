import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/customer/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public cartService: CartService, private spinner: NgxSpinnerService, private router: Router, private toaster: ToastrService) { }

  removeFromCartForm: FormGroup = new FormGroup({
    productID: new FormControl(""),
    userID: new FormControl(Number(localStorage.getItem("userID")))
  })

  ngOnInit(): void {
    var ID = localStorage.getItem("userID")
    this.getCartList(ID)
    this.getSumOfCart(ID)
    this.spinner.show();
    this.getCartCount(ID)
    setTimeout(() => {
      this.spinner.hide();
    }, 700);
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

  removeFromCart(ID: number){
    this.removeFromCartForm.patchValue({
      productID: ID
    });
    this.cartService.removeFromCart(this.removeFromCartForm.value)
    if (this.cartService.countOfCart['countOfCart'] == 1) {
      this.router.navigate([""])
      this.toaster.error("Cart is Empty!")
    }else{
      window.location.reload()
    }
  }

  getCartCount(ID: any){
    this.cartService.getCartCount(ID)
  }
}

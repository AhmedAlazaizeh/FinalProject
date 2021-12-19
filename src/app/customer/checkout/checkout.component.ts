import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { CheckoutService } from 'src/app/services/customer/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

x: Number = Number(localStorage.getItem("sumOfCart"))

  paymentForm: FormGroup = new FormGroup({
    cardNumber: new FormControl('', [Validators.required]),
    CVV: new FormControl('', [Validators.required]),
    expDate: new FormControl('', [Validators.required]),
    cartSum: new FormControl(this.x)
  })

  username = localStorage.getItem("username")

  constructor(public checkoutService: CheckoutService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    var ID = localStorage.getItem("userID")
    this.getUsername();
    this.getCartList(ID)
    this.getSumOfCart(ID)
    localStorage.setItem("paymentButtonFlag", "0")
  }

  getCartList(ID: any){
    this.checkoutService.getCartList(ID)
  }

  getSumOfCart(ID: any){
    this.checkoutService.getSumOfCart(ID)
  }

  pay(){
    this.checkoutService.pay(this.paymentForm.value)
    console.log(this.paymentForm.value)

    if (localStorage.getItem("paymentButtonFlag") == "1") {
      if (localStorage.getItem("paymentFlag") == "True") {
        alert("payed!")
        this.toastr.success("Payed Successfuly", "Thank You!")
      }else{
        alert("not payed!")
        this.toastr.error("There Was An Error!","Check Your Card Info Or Balance")
      }
    }
    localStorage.setItem("paymentButtonFlag", "1")
  }

  getUsername(){
    this.checkoutService.getUserByUsername(this.username!)
  }
}

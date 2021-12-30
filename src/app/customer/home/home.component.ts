import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/customer/home.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgxSpinnerComponent, NgxSpinnerService } from 'ngx-spinner';
import { MatSpinner } from '@angular/material/progress-spinner';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(public homeService: HomeService, private toastr: ToastrService, private router: Router) { }

  favForm: FormGroup = new FormGroup({
    productID: new FormControl(""),
    userID: new FormControl(Number(localStorage.getItem("userID")))
  })

  ngOnInit(): void {
    var ID = localStorage.getItem("userID")
    this.getAllProducts()
    this.getLatestProducts()
    this.getApprovedFeedback()
    this.getListOfInfluncers()
    this.getFavList(ID)
  }

  getAllProducts(){
    this.homeService.getAllProducts()
  }

  getLatestProducts(){
    this.homeService.getLatestProducts()
  }

  getApprovedFeedback(){
    this.homeService.getApprovedFeedback()
  }

  productDetails(ID: any){
    localStorage.setItem("productID", ID)
    this.router.navigate(["productDetails"])
  }

  public createImgPath = (serverPath: string) => {
    return "https://localhost:44309/" + serverPath;
  }

  getListOfInfluncers(){
    this.homeService.getInfluncersInfo()
  }

  getInfluncerProducts(ID: any){
    localStorage.setItem("influncerIDForProducts", ID)
    this.router.navigate(["influncerShop"])
  }

  getFavList(ID: any){
    this.homeService.getFavList(ID)
  }

  addToFav(ID: number){
    this.favForm.patchValue({
      productID: ID
    });
    this.homeService.addToFav(this.favForm.value)
    window.location.reload()
  }

  removeFromFav(ID: Number){
    this.favForm.patchValue({
      productID: ID
    });
    this.homeService.removeFromFav(this.favForm.value)
    window.location.reload()
  }

  checkIfFav(ID: Number){
    for (let index = 0; index < this.homeService.favArray.length; index++) {

      if (this.homeService.favArray[index] == ID) {
        return false
      }
    }
    return true
  }
}

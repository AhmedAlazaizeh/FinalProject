import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ShopService } from 'src/app/services/customer/shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  ID = localStorage.getItem('userID')

  searchedFor: string | any = null
  searchFlag: boolean = false

  constructor(public shopService: ShopService, private router: Router, private spinner: NgxSpinnerService) { }

  favForm: FormGroup = new FormGroup({
    productID: new FormControl(""),
    userID: new FormControl(Number(localStorage.getItem("userID")))
  })

  ngOnInit(): void {
    var ID = localStorage.getItem("userID")
    this.getSearchResult()
    this.getLatestProducts();
    this.getPriceHighToLow();
    this.getPriceLowToHigh();
    this.searchedFor = localStorage.getItem("searchedFor")
    localStorage.removeItem("searchedFor")
    this.getFavList(ID)
  }

  getLatestProducts(){
    this.shopService.getLatestProducts()
  }
  getPriceHighToLow(){
    this.shopService.getPriceHighToLow()
  }
  getPriceLowToHigh(){
    this.shopService.getPriceLowToHigh()
  }

  productDetails(ID: any){
    localStorage.setItem("productID", ID)
    this.router.navigate(["productDetails"])
  }

  public createImgPath = (serverPath: string) => {
    return "https://localhost:44309/" + serverPath;
  }

  getSearchResult(){
    this.shopService.searchProduct()
  }

  getFavList(ID: any){
    this.shopService.getFavList(ID)
  }

  addToFav(ID: number){
    this.favForm.patchValue({
      productID: ID
    });
    this.shopService.addToFav(this.favForm.value)
    //this.ngOnInit()
    window.location.reload()
  }

  removeFromFav(ID: Number){
    this.favForm.patchValue({
      productID: ID
    });
    this.shopService.removeFromFav(this.favForm.value)
    //this.ngOnInit()
    window.location.reload()
  }

  checkIfFav(ID: Number){
    for (let index = 0; index < this.shopService.favArray.length; index++) {

      if (this.shopService.favArray[index] == ID) {
        return false
      }
    }
    return true
  }
}

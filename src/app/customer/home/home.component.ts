import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/customer/home.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgxSpinnerComponent, NgxSpinnerService } from 'ngx-spinner';
import { MatSpinner } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(public homeService: HomeService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.getAllProducts()
    this.getLatestProducts()
    this.getApprovedFeedback()
    this.getListOfInfluncers()
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
}

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

  imgCollection: Array<object> = [
    {
      image: 'https://loremflickr.com/g/600/400/paris',
      thumbImage: 'https://loremflickr.com/g/1200/800/paris',
      alt: 'Image 1',
      title: 'Image 1'
    }, {
      image: 'https://loremflickr.com/600/400/brazil,rio',
      thumbImage: 'https://loremflickr.com/1200/800/brazil,rio',
      title: 'Image 2',
      alt: 'Image 2'
    }, {
      image: 'https://loremflickr.com/600/400/paris,girl/all',
      thumbImage: 'https://loremflickr.com/1200/800/brazil,rio',
      title: 'Image 3',
      alt: 'Image 3'
    }, {
      image: 'https://loremflickr.com/600/400/brazil,rio',
      thumbImage: 'https://loremflickr.com/1200/800/brazil,rio',
      title: 'Image 4',
      alt: 'Image 4'
    }, {
      image: 'https://loremflickr.com/600/400/paris,girl/all',
      thumbImage: 'https://loremflickr.com/1200/800/paris,girl/all',
      title: 'Image 5',
      alt: 'Image 5'
    }
];

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

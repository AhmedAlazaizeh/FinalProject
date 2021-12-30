import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  priceHighToLowData: any = [{}]
  priceLowToHighData: any = [{}]
  latestProductsData: any = [{}]
  searchResult: any = [{}]

  favListData: any = [{}]

  favArray: any = []

  constructor(private http:HttpClient, private toaster: ToastrService) { }

  getPriceHighToLow(){
    this.http.get("https://localhost:44309/api/Product/ProductPriceHighToLow").subscribe((Response: any)=>{this.priceHighToLowData=Response})
  }

  getPriceLowToHigh(){
    this.http.get("https://localhost:44309/api/Product/ProductPriceLowToHigh").subscribe((Response: any)=>{this.priceLowToHighData=Response})
  }

  getLatestProducts(){
    this.http.get("https://localhost:44309/api/Product/latestProductsAll").subscribe((Response: any)=>{this.latestProductsData=Response})
  }

  searchProduct(){
    var searchedFor: string = String(localStorage.getItem("searchedFor"))
    this.http.get("https://localhost:44309/api/Product/SearchProduct/" + searchedFor).subscribe((Response: any)=>{this.searchResult=Response
    console.log(Response)
  })
  }

  getFavList(ID: number){
    this.http.get("https://localhost:44309/api/Favorite/FavList/" + ID).subscribe((Response: any)=>{this.favListData=Response
    for (let index = 0; index < this.favListData.length; index++) {
      this.favArray.push(Number(Response[index]["productID"]))
    }
  })
  }

  addToFav(form: FormGroup){
    const headerDict = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };

    this.http.post("https://localhost:44309/api/Favorite/Add", form, requestOptions).subscribe((res)=>{

      this.toaster.success("Added To Favorite!")

      },err =>{

      this.toaster.error('Somthing wrong!!')

    })
  }

  removeFromFav(form: FormGroup){
    const headerDict = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };

    this.http.post("https://localhost:44309/api/Favorite/Delete", form, requestOptions).subscribe((res)=>{

      this.toaster.success("Removed From Favorite!")

      },err =>{

      this.toaster.error('Somthing wrong!!')

    })
  }
}

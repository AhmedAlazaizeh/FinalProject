import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  priceHighToLowData: any = [{}]
  priceLowToHighData: any = [{}]
  latestProductsData: any = [{}]
  searchResult: any = [{}]

  constructor(private http:HttpClient) { }

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
}

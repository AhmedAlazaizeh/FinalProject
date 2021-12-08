import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  priceHighToLowData: any = [{}]
  priceLowToHighData: any = [{}]
  latestProductsData: any = [{}]

  constructor(private http:HttpClient) { }

  getPriceHighToLow(){
    this.http.get("https://localhost:44309/api/Product/ProductPriceHighToLow").subscribe((Response: any)=>{this.priceHighToLowData=Response})
  }

  getPriceLowToHigh(){
    this.http.get("https://localhost:44309/api/Product/ProductPriceLowToHigh").subscribe((Response: any)=>{this.priceLowToHighData=Response})
  }

  getLatestProducts(){
    this.http.get("https://localhost:44309/api/Product/latestProducts").subscribe((Response: any)=>{this.latestProductsData=Response})
  }
}

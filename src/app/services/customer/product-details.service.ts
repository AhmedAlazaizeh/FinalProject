import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  productDetails: any = [{}]

  constructor(public http: HttpClient) { }

  async getDetails(ID: number){
    await this.http.get("https://localhost:44309/api/Product/getProduct/" + ID).subscribe((Response: any)=>{this.productDetails=Response})
  }
}

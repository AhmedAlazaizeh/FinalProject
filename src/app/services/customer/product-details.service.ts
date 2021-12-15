import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  productDetails: any = [{}]

  constructor(public http: HttpClient) { }

  async getDetails(ID: number){
    await this.http.get("https://localhost:44309/api/Product/getProduct/" + ID).subscribe((Response: any)=>{this.productDetails=Response})
  }


  addToCart(form: FormGroup){

    const headerDict = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };

    this.http.post("https://localhost:44309/api/Order/Add", form, requestOptions).subscribe((res)=>{console.log(res)})
    }
}

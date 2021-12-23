import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfluncerShopService {

  influncerProductsData: any = [{}]
  data: any = [{}]

  constructor(public http: HttpClient) { }

  getInfluncerProducts(ID: number){
    this.http.get("https://localhost:44309/api/Product/getMyProducts/" + ID).subscribe((Response: any)=>{this.influncerProductsData=Response})
  }

  getUser(ID: number){
      this.http.get("https://localhost:44309/api/User/getUser/" + ID).subscribe((Response: any)=>{this.data=Response})
  }
}

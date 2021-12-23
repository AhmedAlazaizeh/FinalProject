import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfluncerShopService } from 'src/app/services/customer/influncer-shop.service';

@Component({
  selector: 'app-influncer-shop',
  templateUrl: './influncer-shop.component.html',
  styleUrls: ['./influncer-shop.component.css']
})
export class InfluncerShopComponent implements OnInit {

  constructor(public influncerShopService: InfluncerShopService, private router: Router) { }

  ngOnInit(): void {
    var influncerID = localStorage.getItem("influncerIDForProducts")
    this.getInfluncereProducts(influncerID)
    this.getInfluncerInfo(influncerID)
  }

  getInfluncereProducts(ID: any){
    this.influncerShopService.getInfluncerProducts(ID)
  }

  getInfluncerInfo(ID: any){
    this.influncerShopService.getUser(ID)
  }

  public createImgPath = (serverPath: string) => {
    return "https://localhost:44309/" + serverPath;
  }

  productDetails(ID: any){
    localStorage.setItem("productID", ID)
    this.router.navigate(["productDetails"])
  }
}

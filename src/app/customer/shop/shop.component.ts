import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShopService } from 'src/app/services/customer/shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(public shopService: ShopService, private router: Router) { }

  ngOnInit(): void {
    this.getLatestProducts();
    this.getPriceHighToLow();
    this.getPriceLowToHigh();
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
}

import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/customer/shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(public shopService: ShopService) { }

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
}

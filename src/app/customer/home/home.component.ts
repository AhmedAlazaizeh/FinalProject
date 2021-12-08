import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/customer/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public homeService: HomeService) { }

  ngOnInit(): void {
    this.getAllProducts()
    this.getLatestProducts()
  }

  getAllProducts(){
    this.homeService.getAllProducts()
  }

  getLatestProducts(){
    this.homeService.getLatestProducts()
  }

  getUserByID(){
    this.homeService.getUserByID(3)
  }
}

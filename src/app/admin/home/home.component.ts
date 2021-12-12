import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/admin/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public homeService: HomeService) { }

  ngOnInit(): void {
    this.getCountOfEmployees()
    this.getCountOfCustomers()
    this.getCountOfInfluncers()
    this.getCountOfFeedback()
    this.getOrderList()
  }

  getCountOfEmployees(){
  this.homeService.getCountOfEmployees()
  }

  getCountOfCustomers(){
    this.homeService.getCountOfCustomers()
  }

  getCountOfInfluncers(){
    this.homeService.getCountOfInfluncers()
  }

  getCountOfFeedback(){
    this.homeService.getCountOfFeedback()
  }

  getOrderList(){
    this.homeService.getOrderLsit()
  }
}

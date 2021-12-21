import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/Delivery/home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public homeService: HomeService) { }

  ngOnInit(): void {
    this.getOrderList()
  }

  getOrderList(){
    this.homeService.getOrderLsit()
  }

  delivered(ID: number){
    this.homeService.delivered(ID)
    window.location.reload()
  }

  notDelivered(ID: number){
    this.homeService.notDelivered(ID)
    window.location.reload()
  }
}

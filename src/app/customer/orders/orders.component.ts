import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/customer/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(public ordersService: OrdersService) { }

  ngOnInit(): void {
    var ID = localStorage.getItem("userID")
    this.getUserOrderList(ID)
    this.sumOfMyOrders(ID)
  }

  getUserOrderList(ID: any){
    this.ordersService.getOrderList(ID)
  }

  sumOfMyOrders(ID: any){
    this.ordersService.sumOfMyOrders(ID)
  }
}

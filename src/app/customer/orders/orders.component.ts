import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { OrdersService } from 'src/app/services/customer/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(public ordersService: OrdersService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    var ID = localStorage.getItem("userID")
    this.getUserOrderList(ID)
    this.sumOfMyOrders(ID)
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 700);
  }

  getUserOrderList(ID: any){
    this.ordersService.getOrderList(ID)
  }

  sumOfMyOrders(ID: any){
    this.ordersService.sumOfMyOrders(ID)
  }
}

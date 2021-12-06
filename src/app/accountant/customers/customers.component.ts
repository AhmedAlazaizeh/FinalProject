import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/accountant/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(public customerService: CustomersService) {
    this.customerService.customersList();
   }

  ngOnInit(): void {
  }

}

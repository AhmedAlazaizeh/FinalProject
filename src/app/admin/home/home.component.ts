import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/admin/home.service';
import * as XLSX from 'xlsx';

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
    this.getSumOfSales()
    this.getSumOfRevune()
    this.getOrderList()
    this.getFinancialList()
    this.getCountOfOrders()
    this.getCountOfActiveProducts()
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

  getFinancialList(){
    this.homeService.getFinancialList()
  }

  getSumOfSales(){
    this.homeService.getSumOfSales()
  }

  getSumOfRevune(){
    this.homeService.getSumOfRevune()
  }

  getCountOfOrders(){
    this.homeService.getCountOfOrders()
  }

  getCountOfActiveProducts(){
    this.homeService.getCountOfActiveProducts()
  }

  exportToExcel(){
    /* pass here the table id */
    let element = document.getElementById('Orders');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, "Orders.xlsx");
  }
}

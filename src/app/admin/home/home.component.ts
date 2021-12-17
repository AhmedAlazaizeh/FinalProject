import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HomeService } from 'src/app/services/admin/home.service';
import * as XLSX from 'xlsx';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';

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

  exportToExcel(tableID: string){
    let element = document.getElementById(tableID);
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, tableID + ".xlsx");
  }

  exportToPDF(tableID: string){
    let data = document.getElementById(tableID)
    html2canvas(data!).then(canvas => {
      let fileWidth = 208;
      let fileHeight = canvas.height * fileWidth / canvas.width;
      const FILEURI = canvas.toDataURL('image/png')
      let PDF = new jspdf('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
      PDF.save(tableID +'.pdf');
  });
  }
}

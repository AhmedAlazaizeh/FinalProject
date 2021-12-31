import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HomeService } from 'src/app/services/accountant/home.service';
import * as XLSX from 'xlsx';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { ChartData } from 'chart.js';
import { ChartType, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username = localStorage.getItem("username")

  chartMonths: any = []

  constructor(public homeService: HomeService) { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ["fg"]
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [630, 590, 800, 870], label: 'Sales', backgroundColor: "#007D7F"}
  ];

  ngOnInit() {
    var ID = localStorage.getItem("userID")
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
    this.getUsername();
    this.getSalesChart()

    console.log(this.chartMonths)
    if (this.chartMonths == []) {
      console.log(this.chartMonths)
      window.location.reload()
    }
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

  getUsername(){
    this.homeService.getUserByUsername(this.username!)
  }

  getSalesChart(){
    this.homeService.getSalesChart()
    this.chartMonths = this.homeService.chartMonths
  }
}

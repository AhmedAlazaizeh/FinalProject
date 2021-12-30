import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import * as XLSX from 'xlsx';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/services/influncer/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('callAPIDialog') callAPIDialog!: TemplateRef<any>;
  @ViewChild('callConfirmDeleteDialog') callConfirmDeleteDialog!: TemplateRef<any>;
  @ViewChild('addProductDialog') addProductDialog!: TemplateRef<any>;

  username = localStorage.getItem("username")

  addProductForm: FormGroup = new FormGroup({
    price: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required]),
    productTitle: new FormControl("", [Validators.required]),
    image: new FormControl(""),
    isAvailable: new FormControl(true),
    userID: new FormControl(Number(localStorage.getItem("userID"))),
    categoryID: new FormControl(1)
  })

  ProductID: number = 0
  Price: number = 0;
  Description: string = "";
  ProductTitle: string = "";
  Image: string = "";
  IsAvailable: boolean = true;
  UserID: number = 0;
  CategoryID: number = 1;

  public response = {dbPath: ''};

  constructor(private dialog: MatDialog, private toastr: ToastrService, public homeService: HomeService) { }

  ngOnInit(): void {
    var ID = Number(localStorage.getItem("userID"))
    this.getUsername();
    this.getMyOrders(ID)
    this.getSumOfSales(ID)
    this.getSumOfRevune(ID)
    this.getCountOfOrders(ID)
    this.getCountOfActiveProducts(ID)
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

  getMyOrders(ID: any){
    this.homeService.getMyOrders(ID)
  }

  getSumOfSales(ID: number){
    this.homeService.getSumOfSales(ID)
  }

  getSumOfRevune(ID: number){
    this.homeService.getSumOfRevune(ID)
  }

  getCountOfOrders(ID: number){
    this.homeService.getCountOfOrders(ID)
  }

  getCountOfActiveProducts(ID: number){
    this.homeService.getCountOfActiveProducts(ID)
  }
}

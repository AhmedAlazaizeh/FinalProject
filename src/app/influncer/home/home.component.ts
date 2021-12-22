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
    var ID = localStorage.getItem("userID")
    this.getMyProducts(ID)
    this.getUsername();
  }

  public uploadFinished = (event:any) => {
  this.response = event;
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

  populateForm(productID: number, productTitle: string, description: string, price: number, image: string)
  {

    this.ProductID = productID
    this.UserID = Number(localStorage.getItem("userID"))
    this.Price = price
    this.Description = description
    this.ProductTitle = productTitle
    this.Image = image
    this.CategoryID = 1
    this.IsAvailable = true

    this.dialog.open(this.callAPIDialog);
  }

  updateProduct(data: any){
    console.log(data)
    this.homeService.updateProduct(data)
    window.location.reload();
  }

  openDeleteDialog(ID: number) {
    let dialogRef =  this.dialog.open(this.callConfirmDeleteDialog);
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
          if (result === 'yes') {
            this.deleteProduct(ID)
          } else if (result === 'no') {
              console.log('User clicked no.');
          }
      }
  })
  }

  deleteProduct(ID: number){
    this.homeService.deleteProduct(ID);
    window.location.reload();
  }

  openAddProductDialog(){
    this.addProductForm.reset()
    this.dialog.open(this.addProductDialog);
  }

  addProduct(){
    this.addProductForm.patchValue({
      image: this.response.dbPath,
      categoryID: 1,
      isAvailable: true,
      userID: Number(localStorage.getItem("userID"))
    });
    this.homeService.addProduct(this.addProductForm.value)
    window.location.reload()
  }

  getMyProducts(ID: any){
    this.homeService.getMyProducts(ID)
  }

  public createImgPath = (serverPath: string) => {
  return "https://localhost:44309/" + serverPath;
  }

  getUsername(){
    this.homeService.getUserByUsername(this.username!)
  }
}

import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { SystemService } from 'src/app/services/admin/system.service';
import * as XLSX from 'xlsx';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {

  @ViewChild('callAPIDialog') callAPIDialog!: TemplateRef<any>;

  username = localStorage.getItem("username")

  IAmAnInfluncerID: number = 0
  AboutUs: string = ""
  OurVision: string = ""
  Email: string = ""
  PhoneNumber: string = ""
  Address: string = ""
  Logo: string = ""
  AddedBy: number = 0

  constructor(private dialog: MatDialog, public systemService: SystemService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getSystem()
    var ID = localStorage.getItem("userID")
    this.getUsername();
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 700);
  }

  getSystem(){
    this.systemService.getAllSystem()
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
    this.systemService.getUserByUsername(this.username!)
  }

  populateForm(iAmAnInfluncerID: number, aboutUs: string, ourVision: string, email: string, phoneNumber: string, address: string, logo: string, addedBy: number)
  {

 this.IAmAnInfluncerID = 2
 this.AboutUs = aboutUs
 this.OurVision = ourVision
 this.Email = email
 this.PhoneNumber = phoneNumber
 this.Address = address
 this.Logo = logo
 this.AddedBy = 1

 this.dialog.open(this.callAPIDialog);
  }

  updateSystem(data: any){
    this.systemService.updateSystem(data)
    window.location.reload();
  }
}

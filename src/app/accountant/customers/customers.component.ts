import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CustomersService } from 'src/app/services/accountant/customers.service';
import * as XLSX from 'xlsx';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  @ViewChild('emailDialog') emailDialog!: TemplateRef<any>;

  username = localStorage.getItem("username")

  emailCustomerForm: FormGroup = new FormGroup({
    emailBody: new FormControl('', [Validators.required])
  })

  constructor(private dialog: MatDialog, public customerService: CustomersService, private toaster: ToastrService) {
    this.customerService.customersList();
   }

  ngOnInit(): void {
    var ID = localStorage.getItem("userID")
    this.getUsername();
  }

  getUsername(){
    this.customerService.getUserByUsername(this.username!)
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

  openEmailDialog(email: string){
    this.emailCustomerForm.reset()
    localStorage.setItem("customerEmail", email)
    this.dialog.open(this.emailDialog);
  }

  sendEmailToCustomer(){
    var emailBody: string = this.emailCustomerForm.get('emailBody')!.value
    var email = localStorage.getItem("customerEmail")
    this.toaster.success("Email Sent!")
  }
}

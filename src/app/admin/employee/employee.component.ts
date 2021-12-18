import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { EmployeeService } from 'src/app/services/admin/employee.service';
import * as XLSX from 'xlsx';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

<<<<<<< HEAD

  @ViewChild('callCreateDialog') callCreateDialog!: TemplateRef<any>;
  @ViewChild('callAPIDialog') callAPIDialog!: TemplateRef<any>;
  @ViewChild('callConfirmDeleteDialog') callConfirmDeleteDialog!: TemplateRef<any>;

  UserId: number=0;
  fName: string='';
  lName: string='';
  email :string='';
  phoneNumber : string='';
  salary: any;
  employmentDate: any;

=======
  username = localStorage.getItem("username")
>>>>>>> ac645c0c4154782d042b4d8b325e709986ac343b

  constructor(private dialog: MatDialog, public employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployeeList()
    var ID = localStorage.getItem("userID")
    this.getUsername();
  }

  opendialog(){
  this.dialog.open(DialogComponent,{data:{name:"monther",age:55664}})
  }

  getEmployeeList() {
    this.employeeService.getEmployeeList();
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

<<<<<<< HEAD

  openDeleteDialog(userId:number) {
    let dialogRef =  this.dialog.open(this.callConfirmDeleteDialog);
    dialogRef.afterClosed().subscribe(result => {
      // Note: If the user clicks outside the dialog or presses the escape key, there'll be no result
      if (result !== undefined) {
          if (result === 'yes') {
            this.deleteEmployee(userId)
              // TODO: Replace the following line with your code.
              console.log('User clicked yes.');
          } else if (result === 'no') {
              // TODO: Replace the following line with your code.
              console.log('User clicked no.');
          }
      }
  })
  }
  populateForm(userId:number,fName:string,lName:string,email:string,phoneNumber:string,salary: any,employmentDate: any
)
    {
      console.log(userId)
   this.UserId =userId;
   console.log( this.UserId )
   this.fName = fName;
   this.lName = lName;
   this.email=email;
   this.phoneNumber=phoneNumber;
   this.salary=salary;
   this.employmentDate=employmentDate;

   this.dialog.open(this.callAPIDialog);
  }

  deleteEmployee(userId:number)
  {
      this.employeeService.deleteEmployee(userId);
      window.location.reload();

  }




=======
  getUsername(){
    this.employeeService.getUserByUsername(this.username!)
  }
>>>>>>> ac645c0c4154782d042b4d8b325e709986ac343b
}


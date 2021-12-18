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

  @ViewChild('callAPIDialog') callAPIDialog!: TemplateRef<any>;

  UserID: number = 0;
  FName: string = "";
  LName: string = "";
  Email: string = "";
  PhoneNumber: string = "";
  Salary: any;
  EmploymentDate: any;
  Password: string = ""
  Usernamee: string = ""
  Longitude: string = ""
  Latitude: string = ""
  RoleID: number = 0

  username = localStorage.getItem("username")

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

  deleteEmployee(userId:number){
      this.employeeService.deleteEmployee(userId);
      window.location.reload();

  }

  getUsername(){
    this.employeeService.getUserByUsername(this.username!)
  }

  populateForm(userID: number, fName: string, lName: string, email: string, phoneNumber: string, username: string, password: string, longitude: string, latitude: string, salary: number, employmentDate: Date, roleID: number)
    {

   this.UserID = userID
   this.FName = fName
   this.LName = lName
   this.Email = email
   this.PhoneNumber = phoneNumber
   this.Usernamee = username
   this.Password = password
   this.Longitude = longitude
   this.Latitude = latitude
   this.Salary = salary
   this.EmploymentDate = employmentDate
   this.RoleID = roleID

   this.dialog.open(this.callAPIDialog);
  }

  updateEmployee(data: any){
    this.employeeService.updateEmployee(data)
    window.location.reload();
  }
}


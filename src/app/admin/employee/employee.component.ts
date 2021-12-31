import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { EmployeeService } from 'src/app/services/admin/employee.service';
import * as XLSX from 'xlsx';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @ViewChild('callAPIDialog') callAPIDialog!: TemplateRef<any>;
  @ViewChild('callConfirmDeleteDialog') callConfirmDeleteDialog!: TemplateRef<any>;
  @ViewChild('addEmployeeDialog') addEmployeeDialog!: TemplateRef<any>;

  addEmployeeForm: FormGroup = new FormGroup({
    fName: new FormControl("", [Validators.required]),
    lName: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    phoneNumber: new FormControl("", [Validators.required]),
    roleID: new FormControl("", [Validators.required]),
    username: new FormControl("", [Validators.required, Validators.minLength(8)]),
    password: new FormControl("", [Validators.required, Validators.minLength(8)]),
    salary: new FormControl("", [Validators.required]),
    longitude: new FormControl("00"),
    latitude: new FormControl("00")
  })

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

  constructor(private dialog: MatDialog, public employeeService: EmployeeService, private toastr: ToastrService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getEmployeeList()
    var ID = localStorage.getItem("userID")
    this.getUsername();
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 700);
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

  openDeleteDialog(ID: number) {
    let dialogRef =  this.dialog.open(this.callConfirmDeleteDialog);
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
          if (result === 'yes') {
            this.deleteEmployee(ID)
          } else if (result === 'no') {
              console.log('User clicked no.');
          }
      }
  })
  }

  deleteEmployee(ID: number){
    this.employeeService.deleteEmployee(ID);
    window.location.reload();
  }

  openAddEmployeeDialog(){
    this.addEmployeeForm.reset()
    this.dialog.open(this.addEmployeeDialog);
  }

  addEmployee(){
    this.addEmployeeForm.patchValue({
      roleID: Number(this.addEmployeeForm.get('roleID')!.value)
    });
    this.employeeService.addEmployee(this.addEmployeeForm.value)
    console.log(this.addEmployeeForm.value)
    window.location.reload()
  }
}


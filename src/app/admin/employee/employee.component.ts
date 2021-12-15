import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { EmployeeService } from 'src/app/services/admin/employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private dialog:MatDialog , public employeeService: EmployeeService) { }

  ngOnInit(): void {
    this. getEmployeeList()
  }

  opendialog(){
  this.dialog.open(DialogComponent,{data:{name:"monther",age:55664}})
  }

  getEmployeeList() {
    this.getEmployeeList();
  }

}

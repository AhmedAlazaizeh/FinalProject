import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/accountant/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(public employeesService: EmployeesService) {
    this.employeesService.employeeList();
   }

  ngOnInit(): void {
  }

}

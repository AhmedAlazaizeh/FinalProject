import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  data: any = [{}]
  financialData: any = [{}]

  constructor(private http: HttpClient) { }

  employeeList(){
    this.http.get("https://localhost:44309/api/User/employeeList").subscribe((Response: any)=>{this.data=Response})
  }

  getFinancialList(){
    this.http.get("https://localhost:44309/api/User/GetFinancial").subscribe((Response: any)=>{this.financialData=Response})
  }
}

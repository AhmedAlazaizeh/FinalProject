import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  employeeList:any = [{}]


  constructor(private http: HttpClient) { }



  getEmployeeList(){
    this.http.get("https://localhost:44309/api/User/employeeList").subscribe((Response: any)=>{this.employeeList=Response})
  }
}

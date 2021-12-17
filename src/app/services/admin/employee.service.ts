import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService, Spinner } from 'ngx-spinner';
import { MatSpinner } from '@angular/material/progress-spinner';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  employeeList:any = [{}]


  constructor(private http: HttpClient, private toastr: ToastrService) { }

  getEmployeeList(){
    this.http.get("https://localhost:44309/api/User/employeeList").subscribe((Response: any)=>{this.employeeList=Response})
  }

  updateEmployee(data: any){
    this.http.put('https://localhost:44309/api/User/Update',data).subscribe((result)=>{

    this.toastr.success('Employee Updated');
     console.log(data);

   },err=>{

     console.log(err);
     console.log(data);
     this.toastr.error(err);

      })
  }

  deleteEmployee(ID: number){
      this.http.delete('https://localhost:44309/api/User/Delete/' + ID).subscribe((date:any)=>{

        this.toastr.success('Deleted!')

      },err =>{

        this.toastr.error('Somthing wrong!!')

      })
    }
}

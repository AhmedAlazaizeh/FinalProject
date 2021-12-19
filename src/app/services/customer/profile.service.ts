import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  data: any = [{}]
  data1: any = [{}]
  constructor(private http:HttpClient, private toastr: ToastrService) { }

  getUserByID(ID: number){
    this.http.get("https://localhost:44309/api/User/getUser/" + ID).subscribe((Response:any)=>{this.data=Response})
  }

  updateUser(data1: any){
    this.http.put('https://localhost:44309/api/User/Update',data1).subscribe((result)=>{

    this.toastr.success('Info Updated');
     console.log(data1);

   },err=>{

     console.log(err);
     console.log(data1);
     this.toastr.error(err);

      })
  }
}

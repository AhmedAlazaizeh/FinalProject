import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  data1: any | string = [{}]

  systemData: any = [{}]

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  getAllSystem(){
    this.http.get("https://localhost:44309/api/IAmAnInfluncer/GetAll").subscribe((Response: any)=>{this.systemData=Response})
  }

  getUserByUsername(username: string){
    if (username != null) {
      this.http.get("https://localhost:44309/api/User/getUserByUsername/" + username).subscribe((Response: any)=>{this.data1=Response})
    }else{
      this.data1 = null
    }
  }

  updateSystem(data: any){
    this.http.put('https://localhost:44309/api/IAmAnInfluncer/Update',data).subscribe((result)=>{
    this.toastr.success('System Info Updated');
     console.log(data);

   },err=>{

     console.log(err);
     console.log(data);
     this.toastr.error(err);

      })
  }
}

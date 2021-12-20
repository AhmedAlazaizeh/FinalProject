import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Toast, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  data1: any | string = [{}]
  data: any = {}


  constructor(private http: HttpClient, private toastr: ToastrService) { }

  getUserByUsername(username: string){
    if (username != null) {
      this.http.get("https://localhost:44309/api/User/getUserByUsername/" + username).subscribe((Response: any)=>{this.data1=Response})
    }else{
      this.data1 = null
    }

  }

  getUserByID(ID: number){
    this.http.get("https://localhost:44309/api/User/getUser/" + ID).subscribe((Response:any)=>{this.data=Response

    localStorage.setItem("userID", Response["userID"])
    localStorage.setItem("fName", Response["fName"])
    localStorage.setItem("lName", Response["lName"])
    localStorage.setItem("email", Response["email"])
    localStorage.setItem("phoneNumber", Response["phoneNumber"])
    localStorage.setItem("username", Response["username"])
    localStorage.setItem("password", Response["password"])
    localStorage.setItem("longitude", Response["longitude"])
    localStorage.setItem("latitude", Response["latitude"])
    localStorage.setItem("employmentDate", Response["employmentDate"])
    localStorage.setItem("roleID", Response["roleID"])
    if (Response["salary"] == null) {
      localStorage.setItem("salary", Response["salary"])
    }
    localStorage.setItem("salary", Response["salary"])
  })
  }

  updateUser(form: FormGroup){

    this.http.put('https://localhost:44309/api/User/Update', form).subscribe((Response)=>{

    this.toastr.success('Info Updated');

   },err=>{

     console.log(err);
     this.toastr.error(err);

    })
  }
}

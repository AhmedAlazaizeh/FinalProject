import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  data: any = {}
  data1: any = [{}]
  constructor(private http:HttpClient, private toastr: ToastrService) { }

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
    localStorage.setItem("salary", Response["salary"])
  })
  }

  updateUser(userID: number, fName: string, lName: string, email: string, phoneNumber: string, username: string, password: string, roleID: number, latitude: string, longitude: string, employmentDate: Date){

    this.http.put('https://localhost:44309/api/User/UpdateUser', {userID: userID, fName: fName, lName: lName, email: email, phoneNumber: phoneNumber, username: username, password: password, roleID: roleID, longitude: longitude, latitude: latitude, employmentDate: employmentDate}).subscribe((result)=>{

    this.toastr.success('Info Updated');

   },err=>{

     console.log(err);
     this.toastr.error(err);

      })
  }

}

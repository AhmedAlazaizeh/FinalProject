import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  //for more than one record
  data: any = [{}]
  //for a single record
  data1 = [{}]
  dataCount: any = {}



  constructor(private http:HttpClient) { }

  getAllUsers(){
    this.http.get("https://localhost:44309/api/User/GetAll").subscribe((Response: any)=>{this.data=Response})
  }

  updateUser(form: FormGroup){

    const headerDict = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

      this.http.post("https://localhost:44309/api/User/Update", form, requestOptions).subscribe((res)=>{console.log(res)})
  }

  getCountOfEmployees(){
    this.http.get("https://localhost:44309/api/User/countOfEmployees").subscribe((Response: any)=>{this.dataCount=Response})
  }

  // ======example of getting a single record with ID======
  getUserByID(ID: number){
    this.http.get("https://localhost:44309/api/User/getUser/" + ID).subscribe((Response:any)=>{this.data=Response})
  }

  //post example
  addUser(fName: string, lName: string, email: string, phoneNumber: string, username: string, password: string, roleID: number){

    const header = { "content-type": "application/json", Accept: "application/json" };

    const request = {
      headers: new HttpHeaders(header)
    };

  this.http.post("https://localhost:44309/api/User/Add", {fname: fName, lname: lName, email: email, phonenumber: phoneNumber, username: username, password: password, roleid: roleID}, request).subscribe((res)=>{console.log})
  }

  //post example
  addUserWithForm(form: FormGroup){

    const headerDict = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

  console.log(form)
  this.http.post("https://localhost:44309/api/User/Add", form, requestOptions).subscribe((res)=>{console.log(res)})
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  //for more than one record
  data: any = [{}]
  //for a single record
  data1 = {}

  constructor(private http:HttpClient) { }

  getAllUsers(){

    this.http.get("https://localhost:44309/api/User/GetAll").subscribe((Response:any)=>{this.data=Response})

  }

  //example of getting a single record with ID
  getUserByID(ID: number){
    this.http.get("https://localhost:44309/api/User/GetAll/" + ID).subscribe((Response:any)=>{this.data1=Response})
  }
}

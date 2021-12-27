import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  allProductsData: any = [{}]
  latestProductsData: any = [{}]
  userData: any = [{}]
  approvedFeedbackData: any = [{}]
  influncersData: any = [{}]

  constructor(private http:HttpClient) { }


  getAllProducts(){
    this.http.get("https://localhost:44309/api/Product/GetAll").subscribe((Response: any)=>{this.allProductsData=Response})
  }

  getUserByID(ID: number){
    this.http.get("https://localhost:44309/api/User/getUser/" + ID).subscribe((Response: any)=>{this.userData=Response})
  }

  getLatestProducts(){
    this.http.get("https://localhost:44309/api/Product/latestProductsAll").subscribe((Response: any)=>{this.latestProductsData=Response})
  }

  getApprovedFeedback(){
    this.http.get("https://localhost:44309/api/Feedback/approvedFeedback").subscribe((Response: any)=>{this.approvedFeedbackData=Response})
  }

  getInfluncersInfo(){
    this.http.get("https://localhost:44309/api/User/influncersList").subscribe((Response: any)=>{this.influncersData=Response})
  }
}

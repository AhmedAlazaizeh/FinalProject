import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  allProductsData: any = [{}]
  latestProductsData: any = [{}]
  userData: any = [{}]
  approvedFeedbackData: any = [{}]
  influncersData: any = [{}]
  favListData: any = [{}]

  favArray: any = []
  constructor(private http:HttpClient, private toaster: ToastrService) { }


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

  getFavList(ID: number){
    this.http.get("https://localhost:44309/api/Favorite/FavList/" + ID).subscribe((Response: any)=>{this.favListData=Response
    for (let index = 0; index < this.favListData.length; index++) {
      this.favArray.push(Number(Response[index]["productID"]))
    }
  })
  }

  addToFav(form: FormGroup){
    const headerDict = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };

    this.http.post("https://localhost:44309/api/Favorite/Add", form, requestOptions).subscribe((res)=>{

      this.toaster.success("Added To Favorite!")

      },err =>{

      this.toaster.error('Somthing wrong!!')

    })
  }

  removeFromFav(form: FormGroup){
    const headerDict = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };

    this.http.post("https://localhost:44309/api/Favorite/Delete", form, requestOptions).subscribe((res)=>{

      this.toaster.success("Removed From Favorite!")

      },err =>{

      this.toaster.error('Somthing wrong!!')

    })
  }
}

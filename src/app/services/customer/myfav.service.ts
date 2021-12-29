import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MyfavService {

  favListData: any = [{}]
  favArray: any = []
  favCount: any = {}
  count: any

  constructor(private http:HttpClient, private toaster: ToastrService) { }

  getFavList(ID: number){
    var count = 0
    this.http.get("https://localhost:44309/api/Favorite/FavList/" + ID).subscribe((Response: any)=>{this.favListData=Response
    for (let index = 0; index < this.favListData.length; index++) {
      this.favArray.push(Number(Response[index]["productID"]))
      count++
    }
    localStorage.setItem("favCount", String(count))
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

  getCountOfFav(ID: number){
    this.http.get("https://localhost:44309/api/Favorite/FavCount/" + ID).subscribe((Response: any)=>{this.favCount=Response
    this.count = Response["favCount"]
  })
  }
}

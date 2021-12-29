import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  data: any | string
  data1: any | string = [{}]
  countOfCart: any = {}
  favCount: any = {}
  count: any

  un = localStorage.getItem("username")
  username = [{"username": this.un}]
  constructor(private http:HttpClient) { }

  getUsername(){

    const headerDict = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    this.http.post("https://localhost:44309/api/User/getUserByUsername", this.username, requestOptions).subscribe((Response: any)=>{this.data=Response})
    console.log(this.data.username)
  }

  getUserByUsername(username: string){
    if (username != null) {
      this.http.get("https://localhost:44309/api/User/getUserByUsername/" + username).subscribe((Response: any)=>{this.data1=Response})
    }else{
      this.data1 = null
    }

  }

  getCartCount(ID: number){
    this.http.get("https://localhost:44309/api/Order/countOfCart/" + ID).subscribe((Response: any)=>{this.countOfCart=Response})
  }

  getCountOfFav(ID: number){
    this.http.get("https://localhost:44309/api/Favorite/FavCount/" + ID).subscribe((Response: any)=>{this.favCount=Response
    this.count = Response["favCount"]
  })
  }
}

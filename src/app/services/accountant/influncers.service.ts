import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfluncersService {

  data: any = [{}]
  data1: any | string = [{}]

  constructor(private http: HttpClient) { }

  influncersList(){
    this.http.get("https://localhost:44309/api/User/influncersList").subscribe((Response: any)=>{this.data=Response})
  }

  getUserByUsername(username: string){
    if (username != null) {
      this.http.get("https://localhost:44309/api/User/getUserByUsername/" + username).subscribe((Response: any)=>{this.data1=Response})
    }else{
      this.data1 = null
    }

  }
}

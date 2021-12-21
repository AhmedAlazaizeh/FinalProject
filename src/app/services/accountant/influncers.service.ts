import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfluncersService {

  data1: any | string = [{}]
  influncersData: any = [{}]

  constructor(private http: HttpClient) { }


  getUserByUsername(username: string){
    if (username != null) {
      this.http.get("https://localhost:44309/api/User/getUserByUsername/" + username).subscribe((Response: any)=>{this.data1=Response})
    }else{
      this.data1 = null
    }
  }

  getInfluncersInfo(){
    this.http.get("https://localhost:44309/api/Order/InfluncersInfo").subscribe((Response: any)=>{this.influncersData=Response

    for (let index = 0; index < this.influncersData.length; index++) {
      this.influncersData[index]["sumOfRevune"] = Math.round(Response[index]["sumOfRevune"] * 100) / 100
    }
  })
  }
}

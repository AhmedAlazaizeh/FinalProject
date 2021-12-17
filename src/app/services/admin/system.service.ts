import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  data1: any | string = [{}]

  systemData: any = [{}]

  constructor(private http: HttpClient) { }

  getAllSystem(){
    this.http.get("https://localhost:44309/api/IAmAnInfluncer/GetAll").subscribe((Response: any)=>{this.systemData=Response})
  }

  getUserByUsername(username: string){
    if (username != null) {
      this.http.get("https://localhost:44309/api/User/getUserByUsername/" + username).subscribe((Response: any)=>{this.data1=Response})
    }else{
      this.data1 = null
    }

  }
}

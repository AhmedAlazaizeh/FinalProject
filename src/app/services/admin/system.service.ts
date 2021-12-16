import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  systemData: any = [{}]

  constructor(private http: HttpClient) { }

  getAllSystem(){
    this.http.get("https://localhost:44309/api/IAmAnInfluncer/GetAll").subscribe((Response: any)=>{this.systemData=Response})
  }
}

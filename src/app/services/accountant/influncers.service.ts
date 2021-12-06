import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfluncersService {

  data: any = [{}]

  constructor(private http: HttpClient) { }

  influncersList(){
    this.http.get("https://localhost:44309/api/User/influncersList").subscribe((Response: any)=>{this.data=Response})
  }
}

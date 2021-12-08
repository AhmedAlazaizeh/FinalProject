import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  data: any = [{}]
  constructor(private http:HttpClient) { }

  getUserByID(ID: number){
    this.http.get("https://localhost:44309/api/User/getUser/" + ID).subscribe((Response:any)=>{this.data=Response})
  }
}

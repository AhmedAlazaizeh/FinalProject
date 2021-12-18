import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  data1: any | string = [{}]

  un = localStorage.getItem("username")
  username = [{"username": this.un}]

  constructor(private http:HttpClient) { }


}

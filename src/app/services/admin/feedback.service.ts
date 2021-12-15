import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  getAllFeedback:any = [{}]


  constructor(private http: HttpClient) { }



  AllFeedback(){
    this.http.get("https://localhost:44309/api/Feedback/getAllFeedback").subscribe((Response: any)=>{this.getAllFeedback=Response})
  }



}

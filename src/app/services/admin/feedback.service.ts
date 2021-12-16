import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  feedbackData: any = [{}]

  constructor(private http: HttpClient) { }

  getAllFeedback(){
    this.http.get("https://localhost:44309/api/Feedback/GetAll").subscribe((Response: any)=>{this.feedbackData=Response})
  }

}

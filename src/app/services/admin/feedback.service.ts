import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  feedbackData: any = [{}]
  data1: any | string = [{}]

  constructor(private http: HttpClient) { }

  getAllFeedback(){
    this.http.get("https://localhost:44309/api/Feedback/GetAll").subscribe((Response: any)=>{this.feedbackData=Response})
  }

  getUserByUsername(username: string){
    if (username != null) {
      this.http.get("https://localhost:44309/api/User/getUserByUsername/" + username).subscribe((Response: any)=>{this.data1=Response})
    }else{
      this.data1 = null
    }
  }

  approveFeedback(ID: number){
    this.http.get("https://localhost:44309/api/Feedback/Approve/" + ID).subscribe((Response: any)=>{})
  }

  disapproveFeedback(ID: number){
    this.http.get("https://localhost:44309/api/Feedback/Disapprove/" + ID).subscribe((Response: any)=>{})
  }

}

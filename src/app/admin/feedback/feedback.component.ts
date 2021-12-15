import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/services/admin/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(public feedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.AllFeedback()
  }



  AllFeedback() {
    this.AllFeedback();
  }


}

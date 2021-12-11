import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FeedbackService } from 'src/app/services/customer/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackForm: FormGroup = new FormGroup({
    feedbackBody: new FormControl("", [Validators.required]),
    isApproved: new FormControl(false),
    userID: new FormControl(3)
  })

  constructor(public feedbackService: FeedbackService, private router: Router) { }

  ngOnInit(): void {
  }

  feedbackSent(){
    this.feedbackService.addFeedback(this.feedbackForm.value)
    this.router.navigate([""])
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FeedbackService } from 'src/app/services/customer/feedback.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackForm: FormGroup = new FormGroup({
    feedbackBody: new FormControl("", [Validators.required]),
    isApproved: new FormControl(false),
    userID: new FormControl(localStorage.getItem("userID"))
  })

  constructor(public feedbackService: FeedbackService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  feedbackSent(){
    if (localStorage.getItem("userID") === null) {
      this.feedbackForm.patchValue({
        userID: 1
      });
    }else{
      this.feedbackForm.patchValue({
        userID: Number(localStorage.getItem("userID"))
      });
    }
    console.log(this.feedbackForm.value)
    this.feedbackService.addFeedback(this.feedbackForm.value)
    this.router.navigate([""])
    this.toastr.success( "Feedback sent");
  }

}

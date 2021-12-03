import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackForm: FormGroup = new FormGroup({
    feedback: new FormControl("", [Validators.required])
  })

  constructor() { }

  ngOnInit(): void {
  }

  feedbackSent(){
    alert(this.feedbackForm)
  }
}

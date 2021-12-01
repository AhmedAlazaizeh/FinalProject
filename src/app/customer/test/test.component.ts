import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  testform: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
  })

  firstName : string | undefined

  x : string = ''

  constructor(private Toast: ToastrService) { }

  ngOnInit(): void {
  }

  getName(){
    alert(this.firstName)
  }

  getall(){
    console.log(this.testform.value)
  }

  showToaster(){
    this.Toast.success("Hello","Title")
  }
}

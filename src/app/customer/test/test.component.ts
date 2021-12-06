import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TestService } from 'src/app/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  selectedFile: File | undefined

  testform: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
  })

  firstName : string = ""

  x : string = ''

  constructor(private Toast: ToastrService, private router: Router, public testService: TestService, private dialog: MatDialog) {
    this.testService.getAllUsers()
  }

  ngOnInit(): void {
  }

  getName(){


    localStorage.setItem("firstName", this.firstName)

    alert(this.firstName)

    //---navigate to Module---
    this.router.navigate(["profile"])

    //---navigate to component---
    // this.router.navigate(["about"])

  }

  getall(){
    console.log(this.testform.value)
  }

  showToaster(){
    this.Toast.success("Hello","Title")
  }

  //matdialogclick(ID: number){
    //this.dialog.open(getbyIDDialogComponent.{data:{ID:ID}});
  //}

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0]
  }

  // onUpload() {
  //   this.testService.uplaodImage(this.selectedFile)
  // }
}

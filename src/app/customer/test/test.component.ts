import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TestService } from 'src/app/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  listData: MatTableDataSource<any> = new MatTableDataSource<any>()
  displayedColumns: string[] = ['fName'];

  addUserWithForm: FormGroup | any

  fName: string = ""
  lName: string = ""
  email: string = ""
  phoneNumber: string = ""
  username: string = ""
  password: string = ""
  roleID: number = 0

  selectedFile: File | undefined

  testform: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
  })

  getUserForm: FormGroup = new FormGroup({
    ID: new FormControl('', [Validators.required])
  })

  firstName : string = ""

  x : string = ''

  constructor(private Toast: ToastrService, private router: Router, public testService: TestService, private dialog: MatDialog, private fb: FormBuilder) {

    this.addUserWithForm = this.fb.group({
      fName: new FormControl,
      lName: new FormControl,
      email: new FormControl,
      username: new FormControl,
      password: new FormControl,
      phoneNumber: new FormControl,
      employmentDate: new FormControl,
      salary: new FormControl,
      roleID: new FormControl,
    })

  }

  ngOnInit(): void {
    this.listData = new MatTableDataSource(this.testService.data)
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

  addUser(){
    this.testService.addUser(this.fName, this.lName, this.email, this.phoneNumber, this.username, this.password, this.roleID)
  }

  addUserWithFormTS(){
    this.testService.addUserWithForm(this.addUserWithForm.value)
  }

  getUser(){
    this.testService.getUserByID(1)
  }


}

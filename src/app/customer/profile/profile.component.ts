import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/customer/home.service';
import { ProfileService } from 'src/app/services/customer/profile.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userID: number = Number(localStorage.getItem("userID"))!
  fName: string = localStorage.getItem("fName")!
  lName: string = localStorage.getItem("lName")!
  email: string = localStorage.getItem("email")!
  phoneNumber: string = localStorage.getItem("phoneNumber")!
  username: string = localStorage.getItem("username")!
  password: string = localStorage.getItem("password")!
  roleID: number = Number(localStorage.getItem("roleID"))!
  salary: number = 0
  longitude: string = localStorage.getItem("longitude")!
  latitude: string = localStorage.getItem("latitude")!
  employmentDate: any = "1000-01-01"

  loggedInUserID: number = Number(localStorage.getItem("userID"))

  updateForm: FormGroup = new FormGroup({})

  constructor(public profileService: ProfileService, private router: Router) {}

  ngOnInit(): void {
    var ID = localStorage.getItem("userID")
    this.getUserByID(ID)

    this.userID = Number(localStorage.getItem("userID"))!
    this.fName = localStorage.getItem("fName")!
    this.lName = localStorage.getItem("lName")!
    this.email = localStorage.getItem("email")!
    this.phoneNumber = localStorage.getItem("phoneNumber")!
    this.username = localStorage.getItem("username")!
    this.password = localStorage.getItem("password")!
    this.salary = 0
    this.employmentDate = localStorage.getItem("employmentDate")!
    this.longitude = localStorage.getItem("longitude")!
    this.latitude = localStorage.getItem("latitude")!
    this.roleID = Number(localStorage.getItem("roleID"))!

    this.updateForm = new FormGroup({
      userID: new FormControl(this.userID),
      fName: new FormControl(this.fName),
      lName: new FormControl(this.lName),
      email: new FormControl(this.email),
      phoneNumber: new FormControl(this.phoneNumber),
      username: new FormControl(this.username),
      password: new FormControl(this.password),
      salary: new FormControl(0),
      employmentDate: new FormControl("1000-01-01"),
      longitude: new FormControl(this.longitude),
      latitude: new FormControl(this.latitude),
      roleID: new FormControl(this.roleID)
    })
    if (this.userID != Number(localStorage.getItem("userID"))) {
      window.location.reload()
    }

  }

  getUserByID(ID: any){
    this.profileService.getUserByID(ID)
  }

  updateUser(){
    console.log(this.updateForm.value)
    this.profileService.updateUser(this.updateForm.value)
    this.router.navigate([""])
  }
}

import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/customer/home.service';
import { ProfileService } from 'src/app/services/customer/profile.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userID: number = 0
  fName: string = "aa"
  lName: string = "bb"
  email: string = ""
  phoneNumber: string = ""
  username: string = ""
  password: string = ""
  roleID: number = 0
  salary: number = 0
  longitude: string = ""
  latitude: string = ""
  employmentDate: any

  loggedInUserID: number = Number(localStorage.getItem("userID"))

  constructor(public profileService: ProfileService) {}

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
    this.salary = Number(localStorage.getItem("salary"))!
    this.employmentDate = localStorage.getItem("employmentDate")!
    this.longitude = localStorage.getItem("longitude")!
    this.latitude = localStorage.getItem("latitude")!
    this.roleID = Number(localStorage.getItem("fName"))!

  }

  getUserByID(ID: any){
    this.profileService.getUserByID(ID)
  }

  updateUser(){
    this.profileService.updateUser(this.userID, this.fName, this.lName, this.email, this.phoneNumber, this.username, this.password, this.roleID, this.longitude, this.latitude, this.employmentDate)
    //window.location.reload();
  }
}

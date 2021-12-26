import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/influncer/profile.service';


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
  salary: number = Number(localStorage.getItem("salary"))!
  longitude: string = localStorage.getItem("longitude")!
  latitude: string = localStorage.getItem("latitude")!
  employmentDate: any = localStorage.getItem("employmentDate")!

  usernamee = localStorage.getItem("username")

  updateForm: FormGroup = new FormGroup({})

  constructor(public profileService: ProfileService, private router: Router) { }

  ngOnInit(): void {
    var ID = localStorage.getItem("userID")
    this.getUserByID(ID)
    this.getUsername();

    this.userID = Number(localStorage.getItem("userID"))!
    this.fName = localStorage.getItem("fName")!
    this.lName = localStorage.getItem("lName")!
    this.email = localStorage.getItem("email")!
    this.phoneNumber = localStorage.getItem("phoneNumber")!
    this.username = localStorage.getItem("username")!
    this.password = localStorage.getItem("password")!
    this.salary = Number(localStorage.getItem("salary"))
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
      salary: new FormControl(this.salary),
      employmentDate: new FormControl(this.employmentDate),
      longitude: new FormControl(this.longitude),
      latitude: new FormControl(this.latitude),
      roleID: new FormControl(this.roleID)
    })
    this.reload()
  }

  getUsername(){
    this.profileService.getUserByUsername(this.usernamee!)
  }

  getUserByID(ID: any){
    this.profileService.getUserByID(ID)
  }

  updateUser(){
    console.log(this.updateForm.value)
    this.profileService.updateUser(this.updateForm.value)
    this.router.navigate(["/Admin"])
  }
  reload(){
    if (this.fName == null) {
      window.location.reload()
    }
  }
}

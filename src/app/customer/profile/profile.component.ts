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

  loggedInUserID: number = Number(localStorage.getItem("userID"))

  constructor(public profileService: ProfileService) {}

  ngOnInit(): void {
    var ID = localStorage.getItem("userID")
    this.getUserByID(ID)
  }

  getUserByID(ID: any){
    this.profileService.getUserByID(ID)
  }

  updateUser(data: any){
    this.profileService.updateUser(data)
    window.location.reload();
  }
}

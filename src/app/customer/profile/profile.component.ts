import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/customer/home.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  loggedInUserID: number = Number(localStorage.getItem("userID"))

  constructor(public homeService: HomeService) {

  }

  ngOnInit(): void {
    this.getUserByID()
  }

  getUserByID(){
    this.homeService.getUserByID(this.loggedInUserID)
  }
}

import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/admin/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username = localStorage.getItem("username")

  constructor(public profileService: ProfileService) { }

  ngOnInit(): void {
    var ID = localStorage.getItem("userID")
    this.getUsername();
  }

  getUsername(){
    this.profileService.getUserByUsername(this.username!)
  }
}

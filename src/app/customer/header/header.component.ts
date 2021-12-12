import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/services/customer/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usernameReturned: any

  username = localStorage.getItem("username")
  constructor(private router: Router, public headerService: HeaderService) { }

  ngOnInit(): void {
      this.getUsername();
      console.log(this.headerService.data1)
      console.log(this.headerService.data1.value)
      console.log(this.headerService.data1[0])
      console.log(this.headerService.data1[1])
      console.log(this.headerService.data1.userID)
      console.log(this.headerService.data1.value.userID)
      console.log(this.headerService.data1[0].userID)
      console.log(this.headerService.data1[1].userID)
      console.log(this.headerService.data1["userID"].value)
  }

  logOut(){
    localStorage.clear()
      window.location.reload();
  }

  getUsername(){
    this.headerService.getUserByUsername(this.username!)
  }

  getUserID(){

  }
}

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
  }

  logOut(){
    localStorage.clear()
    window.location.reload();
  }

  getUsername(){
    this.usernameReturned = this.headerService.getUsername()
  }
}

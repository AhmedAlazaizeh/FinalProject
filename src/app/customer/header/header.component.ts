import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HeaderService } from 'src/app/services/customer/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usernameReturned: any

  username = localStorage.getItem("username")
  constructor(private router: Router, public headerService: HeaderService, private toastr: ToastrService) { }

  ngOnInit(): void {
    var ID = localStorage.getItem("userID")
    this.getUsername();
    this.getCartCount(ID)
  }

  logOut(){
    localStorage.clear()
    this.toastr.error("Logged Out!")
    this.router.navigate(["/Auth"])
  }

  getUsername(){
    this.headerService.getUserByUsername(this.username!)
  }

  getCartCount(ID: any){
    this.headerService.getCartCount(ID)
  }
}

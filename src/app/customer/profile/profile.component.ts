import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {



  constructor() {

    var item = localStorage.getItem("firstName");

   }

  ngOnInit(): void {
  }

  y = localStorage.getItem("firstName")

}

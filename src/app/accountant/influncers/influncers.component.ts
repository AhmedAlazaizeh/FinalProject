import { Component, OnInit } from '@angular/core';
import { InfluncersService } from 'src/app/services/accountant/influncers.service';

@Component({
  selector: 'app-influncers',
  templateUrl: './influncers.component.html',
  styleUrls: ['./influncers.component.css']
})
export class InfluncersComponent implements OnInit {

  username = localStorage.getItem("username")

  constructor(public influncersService: InfluncersService) {
    this.influncersService.influncersList();
  }

  ngOnInit(): void {
    var ID = localStorage.getItem("userID")
    this.getUsername();
  }

  getUsername(){
    this.influncersService.getUserByUsername(this.username!)
  }
}

import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/services/Delivery/home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('mapDialog') mapDialog!: TemplateRef<any>;

  username = localStorage.getItem("username")

  constructor(public homeService: HomeService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getOrderList()
    var ID = localStorage.getItem("userID")
    this.getUsername();
  }

  getOrderList(){
    this.homeService.getOrderLsit()
  }

  delivered(ID: number){
    this.homeService.delivered(ID)
    window.location.reload()
  }

  notDelivered(ID: number){
    this.homeService.notDelivered(ID)
    window.location.reload()
  }

  getUsername(){
    this.homeService.getUserByUsername(this.username!)
  }

  openMapDialog(){
    this.dialog.open(this.mapDialog);
  }
}

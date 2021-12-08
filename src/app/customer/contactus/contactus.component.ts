import { Component, OnInit } from '@angular/core';
import { ContactusService } from 'src/app/services/customer/contactus.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(public contactUsService: ContactusService) { }

  ngOnInit(): void {
    this.getSystemInfo()
  }

  getSystemInfo(){
    this.contactUsService.getSystemInfo()
  }
}

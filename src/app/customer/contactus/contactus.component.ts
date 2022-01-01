import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ContactusService } from 'src/app/services/customer/contactus.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(public contactUsService: ContactusService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getSystemInfo()
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 700);
  }

  getSystemInfo(){
    this.contactUsService.getSystemInfo()
  }
}

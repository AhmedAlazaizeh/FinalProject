import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AboutService } from 'src/app/services/customer/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public aboutService: AboutService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getSystemInfo()
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 700);
  }

  getSystemInfo(){
    this.aboutService.getSystemInfo()
  }
}

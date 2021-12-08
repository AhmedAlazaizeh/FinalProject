import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/services/customer/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public aboutService: AboutService) { }

  ngOnInit(): void {
    this.getSystemInfo()
  }

  getSystemInfo(){
    this.aboutService.getSystemInfo()
  }
}

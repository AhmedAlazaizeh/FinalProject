import { Component, OnInit } from '@angular/core';
import { InfluncersService } from 'src/app/services/accountant/influncers.service';

@Component({
  selector: 'app-influncers',
  templateUrl: './influncers.component.html',
  styleUrls: ['./influncers.component.css']
})
export class InfluncersComponent implements OnInit {

  constructor(public influncersService: InfluncersService) {
    this.influncersService.influncersList();
  }

  ngOnInit(): void {
  }

}

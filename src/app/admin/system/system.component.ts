import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/services/admin/system.service';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {

  constructor(public systemService: SystemService) { }

  ngOnInit(): void {
    this.getSystem()
  }

  getSystem(){
    this.systemService.getAllSystem()
  }
}

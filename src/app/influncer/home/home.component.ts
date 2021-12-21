import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public response= {dbPath: ''};

  constructor() { }

  ngOnInit(): void {
  }

  public uploadFinished = (event:any) => {
  this.response = event;
  }

  submit(data: any){

  data.cV = this.response.dbPath;
  console.log(data.cV);

  }
}

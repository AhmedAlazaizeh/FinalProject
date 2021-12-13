import { Component,Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private dialog:MatDialog,@Inject(MAT_DIALOG_DATA)public data:{name:string,age:number})
  {

  }
  ngOnInit(): void {
  }


  close()
  {
this.dialog.closeAll()

  }

}

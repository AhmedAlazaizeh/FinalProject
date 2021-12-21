import { Component, OnInit } from '@angular/core';
import { InfluncersService } from 'src/app/services/accountant/influncers.service';
import * as XLSX from 'xlsx';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-influncers',
  templateUrl: './influncers.component.html',
  styleUrls: ['./influncers.component.css']
})
export class InfluncersComponent implements OnInit {

  username = localStorage.getItem("username")

  constructor(public influncersService: InfluncersService) {
  }

  ngOnInit(): void {
    var ID = localStorage.getItem("userID")
    this.getUsername();
    this.getInfluncersInfo()
  }

  getUsername(){
    this.influncersService.getUserByUsername(this.username!)
  }

  exportToExcel(tableID: string){
    let element = document.getElementById(tableID);
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, tableID + ".xlsx");
  }

  exportToPDF(tableID: string){
    let data = document.getElementById(tableID)
    html2canvas(data!).then(canvas => {
      let fileWidth = 208;
      let fileHeight = canvas.height * fileWidth / canvas.width;
      const FILEURI = canvas.toDataURL('image/png')
      let PDF = new jspdf('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
      PDF.save(tableID +'.pdf');
  });
  }

  getInfluncersInfo(){
    this.influncersService.getInfluncersInfo()
  }
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { HttpEventType, HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  public progress: number=0;

  public message: string="";

  @Output() public onUploadFinished = new EventEmitter();

  constructor(private http: HttpClient, private toaster: ToastrService) { }

  ngOnInit() {

  }
  public uploadFile = (files:any) => {

    if (files.length === 0) {
      return;
    }

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.http.post('https://localhost:44309/api/Product/Upload', formData, {reportProgress: true, observe: 'events'})

      .subscribe(event => {

        if (event.type === HttpEventType.UploadProgress && event.total !=undefined  ){

          this.toaster.success("Uploaded!")

        }else if (event.type === HttpEventType.Response) {

          this.onUploadFinished.emit(event.body);

        }
      });
  }
}

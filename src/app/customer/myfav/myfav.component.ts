import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MyfavService } from 'src/app/services/customer/myfav.service';

@Component({
  selector: 'app-myfav',
  templateUrl: './myfav.component.html',
  styleUrls: ['./myfav.component.css']
})
export class MyfavComponent implements OnInit {

  constructor(public myfavService: MyfavService, private router: Router, private toaster: ToastrService) { }

  favForm: FormGroup = new FormGroup({
    productID: new FormControl(""),
    userID: new FormControl(Number(localStorage.getItem("userID")))
  })

  ngOnInit(): void {
    var ID = localStorage.getItem("userID")
    this.getFavList(ID)
    this.getFavCount(ID)
  }

  public createImgPath = (serverPath: string) => {
    return "https://localhost:44309/" + serverPath;
  }

  productDetails(ID: any){
    localStorage.setItem("productID", ID)
    this.router.navigate(["productDetails"])
  }

  getFavList(ID: any){
    this.myfavService.getFavList(ID)
  }

  addToFav(ID: number){
    this.favForm.patchValue({
      productID: ID
    });
    this.myfavService.addToFav(this.favForm.value)
    //this.ngOnInit()
    window.location.reload()
  }

  removeFromFav(ID: Number){
    this.favForm.patchValue({
      productID: ID
    });
    this.myfavService.removeFromFav(this.favForm.value)
    //this.ngOnInit()
    this.checkIfEmpty()
  }

  checkIfFav(ID: Number){
    for (let index = 0; index < this.myfavService.favArray.length; index++) {

      if (this.myfavService.favArray[index] == ID) {
        return false
      }
    }
    return true
  }

  checkIfEmpty(){
    var count = this.myfavService.count
    if (count == 1) {
      this.router.navigate([""])
      this.toaster.error("Favorite list is empty")
    }else{
      window.location.reload()
    }
  }

  getFavCount(ID: any){
    this.myfavService.getCountOfFav(ID)
  }
}

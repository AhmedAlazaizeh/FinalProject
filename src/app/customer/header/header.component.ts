import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HeaderService } from 'src/app/services/customer/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('searchDialog') searchDialog!: TemplateRef<any>;

  usernameReturned: any

  searchForm: FormGroup = new FormGroup({
    searchBody: new FormControl('', [Validators.required])
  })

  username = localStorage.getItem("username")
  constructor(private router: Router, public headerService: HeaderService, private toastr: ToastrService, private dialog: MatDialog) { }

  ngOnInit(): void {
    var ID = localStorage.getItem("userID")
    this.getUsername();
    this.getCartCount(ID)
  }

  logOut(){
    localStorage.clear()
    this.toastr.error("Logged Out!")
    this.router.navigate(["/Auth"])
  }

  getUsername(){
    this.headerService.getUserByUsername(this.username!)
  }

  getCartCount(ID: any){
    this.headerService.getCartCount(ID)
  }

  openSearchDialog(){
    this.searchForm.reset()
    this.dialog.open(this.searchDialog);
  }

  searchedFor(){
    console.log(this.searchForm.value)
    localStorage.setItem("searchedFor", this.searchForm.get('searchBody')!.value)

    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate(["shop"]));
  }
}

import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  returnedToken: any

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })


  constructor(private loginService: LoginService, private router: Router, private toastr: ToastrService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.returnedToken = null
    localStorage.clear()
    localStorage.clear()
    this.loginService.token = null
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 700);
  }

  logedin(){
    localStorage.clear()
    localStorage.clear()
    this.loginService.getToken(this.loginForm.value)
    this.returnedToken = jwtDecode(this.loginService.token)
    localStorage.setItem("userID", this.returnedToken.userID)
    localStorage.setItem("role", this.returnedToken.role)
    console.log("login form: ",this.loginForm.value)

      switch (localStorage.getItem("role")) {

        case "Admin":
          localStorage.setItem("username", this.returnedToken.unique_name)
          localStorage.setItem("role", this.returnedToken.role)
          this.router.navigate(["Admin"])
          this.toastr.success("Logged In Successfully!");
          break;

        case "Customer":
          localStorage.setItem("username", this.returnedToken.unique_name)
          localStorage.setItem("role", this.returnedToken.role)
          this.router.navigate([""])
          this.toastr.success("Logged In Successfully!");
          break;

        case "Accountant":
          localStorage.setItem("username", this.returnedToken.unique_name)
          localStorage.setItem("role", this.returnedToken.role)
          this.router.navigate(["Accountant"])
          this.toastr.success("Logged In Successfully!");
          break;

        case "Delivery":
          localStorage.setItem("username", this.returnedToken.unique_name)
          localStorage.setItem("role", this.returnedToken.role)
          this.router.navigate(["Delivery"])
          this.toastr.success("Logged In Successfully!");
          break;

        case "Influncer":
          localStorage.setItem("username", this.returnedToken.unique_name)
          localStorage.setItem("role", this.returnedToken.role)
          this.router.navigate(["Influncer"])
          this.toastr.success("Logged In Successfully!");
          break;

        default:
          this.toastr.error("Wronge username or password!")
        break;
      }
  }
}

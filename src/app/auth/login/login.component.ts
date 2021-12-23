import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
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


  constructor(private loginService: LoginService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    localStorage.clear()
    localStorage.clear()
  }

  logedin(){
    localStorage.clear()
    localStorage.clear()
    this.loginService.getToken(this.loginForm.value)
    this.returnedToken = jwtDecode(this.loginService.token)
    localStorage.setItem("userID", this.returnedToken.userID)

    console.log(this.returnedToken.role)
    console.log(this.returnedToken.unique_name)

      switch (this.returnedToken.role) {

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
        break;
      }
  }
}

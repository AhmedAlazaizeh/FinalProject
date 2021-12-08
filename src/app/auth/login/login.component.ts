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

  passwordControl = new FormControl('', [Validators.required, Validators.minLength(8)])

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  logedin(){

    localStorage.clear()
    this.loginService.getToken(this.loginForm.value)

    this.returnedToken = jwtDecode(this.loginService.token)

    console.log(this.returnedToken.role)
    console.log(this.returnedToken.unique_name)

    switch (this.returnedToken.role) {

      case "Admin":
        localStorage.setItem("username", this.returnedToken.unique_name)
        localStorage.setItem("role", this.returnedToken.role)
        this.router.navigate(["Admin"])
        break;

      case "Customer":
        localStorage.setItem("username", this.returnedToken.unique_name)
        localStorage.setItem("role", this.returnedToken.role)
        localStorage.setItem("role", this.returnedToken.role)
        this.router.navigate([""])
        break;

      case "Accountant":
        localStorage.setItem("username", this.returnedToken.unique_name)
        localStorage.setItem("role", this.returnedToken.role)
        this.router.navigate(["Accountant"])
        break;

      case "Developer":
        localStorage.setItem("username", this.returnedToken.unique_name)
        localStorage.setItem("role", this.returnedToken.role)
        this.router.navigate(["Developer"])
        break;

      case "Influncer":
        localStorage.setItem("username", this.returnedToken.unique_name)
        localStorage.setItem("role", this.returnedToken.role)
        this.router.navigate(["Influncer"])
        break;

      default:
      alert("Worng usernmae or password")
      break;
    }
  }
}

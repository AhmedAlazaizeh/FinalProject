import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  passwordControl = new FormControl('', [Validators.required, Validators.minLength(8)])

  constructor() { }

  ngOnInit(): void {
  }

  logedin(){
    alert(this.loginForm.value.username +" "+ this.loginForm.value.password)
  }
}

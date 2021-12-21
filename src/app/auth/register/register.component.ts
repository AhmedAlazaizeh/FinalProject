import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,  Validators } from '@angular/forms';
import { isPlatformWorkerApp } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  registerForm: FormGroup = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
   
    phoneNumber: new FormControl('', [Validators.required]),
    username : new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required,Validators.minLength(8)]),
   confirmPassword: new FormControl('', [Validators.required,Validators.minLength(8)]),
   
    //الطول والعرض lat: new FormControl(''),
    //  lng: new FormControl('')
    })
    


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submit(){
    const formValue =
    this.registerForm.value;
    console.log(formValue)

    
    }
    goToLoginPage(){
      this.router.navigate(['']);
      }
   
    
}

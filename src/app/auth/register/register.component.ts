import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MinValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { lastValueFrom } from 'rxjs';
import { RegisterService } from 'src/app/services/auth/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  address: string| undefined;
  formattedAddress: string | undefined;
  latitude: any;
  longitude: any;
  addressTitle: string| undefined;
  link: any;
  invalidLink: any;
  fullAddress: any;

  lat: any = localStorage.getItem("lat")
  lon: any = localStorage.getItem("lon")

  registerform: FormGroup = new FormGroup({
    fName: new FormControl('', [Validators.required]),
    lName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required,Validators.email]),
    phoneNumber: new FormControl('', [Validators.required]),
    roleID: new FormControl(5),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required,Validators.minLength(8)]),
    longitude: new FormControl(this.lon),
    latitude: new FormControl(this.lat),
    salary: new FormControl(0)
  })

  constructor(public registerServiec: RegisterService, private router: Router, private toaster: ToastrService) { }

  ngOnInit(): void {
  }

  addRegister(){
    console.log(this.registerform.value)
    this.registerServiec.addRegister(this.registerform.value)
    this.toaster.success("Registered Successfuly!")
    this.router.navigate(["/Auth"])
  }

//google Map Config
 getSearchedMarkerplace(place: any) {
  //this.formattedAddress = place['formatted_address'];
  this.latitude = place['geometry']['location']['lat']();
  this.longitude = place['geometry']['location']['lng']();
  //this.addressTitle = place['formatted_address'];
  this.resetLink();
}

getDroppedMarkerLocation(location: any) {
  this.latitude = location['lat']();
  this.longitude = location['lng']();
}

resetLink() {
  this.link = null;
  this.invalidLink = null;
}

linkOnChange() {
  this.longitude = null;
  this.latitude = null;
  if (!this.link)
    return;

  // get long and lat from url
  var splitUrl = this.link.split('!2d');
  var latLong = splitUrl[splitUrl.length - 1].split('!3d');
  var longitude;

  // get lat
  if (latLong.indexOf('?') !== -1) {
    longitude = latLong[1].split('\\?')[0];
  } else {
    longitude = latLong[1];
  }

  // get long
  if (longitude && longitude.indexOf('!') > -1)
    longitude = longitude.split('!')[0];

  if (latLong && latLong.length > 1)
    var latitude = latLong[0];

  // set long and lat to scope
  this.latitude = Number(longitude);
  this.longitude = Number(latitude);

  if (!this.latitude || !this.longitude) {
    this.invalidLink = true;
  } else {
    this.invalidLink = false;
  }
}
}

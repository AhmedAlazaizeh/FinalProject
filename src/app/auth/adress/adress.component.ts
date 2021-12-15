import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adress',
  templateUrl: './adress.component.html',
  styleUrls: ['./adress.component.css']
})
export class AdressComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'test';
  address: string| undefined;
  formattedAddress: string | undefined;
  latitude: any;
  longitude:any;
  addressTitle: string| undefined;
  link: any;
  invalidLink: any;
  fullAddress: any;

 //google Map Config
 getSearchedMarkerplace(place: any) {
  this.formattedAddress = place['formatted_address'];
  this.latitude = place['geometry']['location']['lat']();
  this.longitude = place['geometry']['location']['lng']();
  this.addressTitle = place['formatted_address'];
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

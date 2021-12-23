import { Component, OnInit, ViewChild } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.control.component.html'
})
export class GoogleMap implements OnInit {

  @ViewChild('google_map', { static: true }) gmapElement: any;

  map: any
  title: any
  markers: any[] = []
  constructor() { }

  ngOnInit(): void {
    var lat: Number = Number(localStorage.getItem("lat"))!
    var lng: Number = Number(localStorage.getItem("lng"))!
    var mapProp = {
      center: new google.maps.LatLng(lat, lng),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    var myLatlng = new google.maps.LatLng(lat, lng);
    this.addMarkerDropped(myLatlng);
  }

  addMarkerDropped(location: any) {
    var marker = new google.maps.Marker({
      position: location,
      map: this.map,
      title: this.title,
      draggable: false,
    });
  }
}

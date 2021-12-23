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
    this.showMap()
  }

  public showMap():void{

    var myLatlng = new google.maps.LatLng(35.1, 52.6);
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: this.map,
      title: this.title,
      draggable: true
    });
    marker.setAnimation(google.maps.Animation.BOUNCE);
    this.markers.push(marker);
    console.log(myLatlng)
  }
}

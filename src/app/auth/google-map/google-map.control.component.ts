import { Location } from "@angular/common";
import { Component, ViewChild, Input, Output, EventEmitter, OnChanges, SimpleChanges } from "@angular/core";

declare var google: any;

@Component({
  selector: 'app-google-map',
  templateUrl: 'google-map.control.component.html'
})

export class GoogleMapControlComponent {

  @ViewChild('google_map', { static: true }) gmapElement: any;
  @ViewChild('addresstext', { static: true }) addresstext: any;

  map: any;
  width = '150%';
   height = '500px';

  @Input() adressType: string | undefined;
  @Input() adressNameFilled: string | undefined;
  @Input() latFilled: string | undefined;
  @Input() lngFilled: string | undefined;
  @Input() locations: any[] = [];
  @Input() readonly: boolean = false;
  @Output() setSearchedMarkerplace: EventEmitter<any> = new EventEmitter();
  @Output() setDroppedMarkerLocation: EventEmitter<any> = new EventEmitter();
  @Output() infoWindowOpen: EventEmitter<any> = new EventEmitter();
  autocompleteInput: string | undefined;
  queryWait: boolean | undefined;
  lat: number | undefined;
  long: number | undefined;
  title: string | undefined;
  markers: any[] = [];

  constructor() {}

  ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(31.963158, 35.930359),

      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    if (!this.readonly) {
      google.maps.event.addListener(this.map, 'click', (event: any) => {
        this.deleteMarkers();
        this.addMarkerDropped(event.latLng);
      });
      this.getPlaceAutocomplete();
    }
    if (this.locations.length > 0) {
      this.locations.forEach(location => {
        var myLatlng = new google.maps.LatLng(location.latFilled, location.lngFilled);
        this.addMarkerDropped(myLatlng, location.color, location.id);
      })
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["adressNameFilled"]) {
      if (this.latFilled && this.lngFilled) {
        this.autocompleteInput = this.adressNameFilled;
        var myLatlng = new google.maps.LatLng(this.latFilled, this.lngFilled);
        this.addMarkerDropped(myLatlng);
      }
    } else if (changes["latFilled"] || changes["lngFilled"]) {
      var myLatlng = new google.maps.LatLng(this.latFilled, this.lngFilled);
      this.deleteMarkers();
      this.addMarkerDropped(myLatlng)
    }
    else if (changes["locations"]) {
      this.locations.forEach(location => {
        var myLatlng = new google.maps.LatLng(location.latFilled, location.lngFilled);
        this.addMarkerDropped(myLatlng, location.color, location.id);
      })

    }
  }
  private ShowLocation(position: any, map: any): void {
    this.long = +position.coords.longitude;
    this.lat = +position.coords.latitude;
    this.deleteMarkers();
    this.drawSearchedMarker();
  }
  public GetCurrentLocation(): void {

    if (navigator.geolocation) {
      navigator.permissions.query({ name: 'geolocation' })
        .then(a => {

          a.state == 'denied' ? alert("please enable Location on This Site from browser settings") : null;

        });
      navigator.geolocation.getCurrentPosition((position) => {
        this.ShowLocation(position, this.map);
        localStorage.setItem("lon", String(position.coords.longitude))
        localStorage.setItem("lat", String(position.coords.latitude))
      });



    } else {
      alert("Geolocation is not supported by this browser.");
    }
    console.log()
  }

  getPlaceAutocomplete() {
    if (this.addresstext) {
      const autocomplete = new google.maps.places.Autocomplete(this.addresstext.nativeElement,
        {
          componentRestrictions: { country: 'AE' },
          types: [this.adressType]  // 'establishment' / 'address' / 'geocode'
        });
      google.maps.event.addListener(autocomplete, 'place_changed', () => {
        const place = autocomplete.getPlace();
        this.lat = place.geometry.location.lat();
        this.long = place.geometry.location.lng();
        this.title = place.formatted_address;
        this.deleteMarkers();
        this.drawSearchedMarker();
        this.searchedMarkerplaceEvent(place);
        this.map.setCenter({ lat: this.lat, lng: this.long });
      });
    }

  }

  searchedMarkerplaceEvent(place: Object) {
    this.setSearchedMarkerplace.emit(place);

  }

  drawSearchedMarker() {
    var myLatlng = new google.maps.LatLng(this.lat, this.long);
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: this.map,
      title: this.title,
      draggable: false
    });
    marker.setAnimation(google.maps.Animation.BOUNCE);

    this.markers.push(marker);



  }

  addMarkerDropped(location: any, color: string = '', id: number = 0) {
    var marker = new google.maps.Marker({
      position: location,
      map: this.map,
      title: this.title,
      draggable: false,


    });

    marker.setAnimation(google.maps.Animation.BOUNCE);

    this.lat = location.lat();
    this.long = location.lng();
    if (id != null) {
      marker.addListener("click", () => {
        var result = { lat: this.lat, long: this.long, color: color, id: id };
        this.infoWindowOpen.emit(result);
      });
    }

    this.droppedMarkerLocationEvent(location);
    this.markers.push(marker);
    this.map.setCenter({ lat: this.lat, lng: this.long });

    localStorage.setItem("lon", String(this.long))
    localStorage.setItem("lat", String(this.lat))
  }

  setMapOnAll(map: any) {
    for (var i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(map);
    }
  }

  clearMarkers() {
    this.setMapOnAll(null);
  }

  deleteMarkers() {
    this.clearMarkers();
    this.markers = [];
  }
  droppedMarkerLocationEvent(location: Object) {
    this.setDroppedMarkerLocation.emit(location);

  }
}

import { Component } from '@angular/core';
import { callbackify } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ubiclient';
  texto : string = 'Wenceslau Braz - Cuidado com as cargas';
  lat: number    = 14.589282;
  lng: number    = -90.551469;
  zoom: number   = 15;

  target = {
    latitude : 14.556523,
    longitude: -90.733872
  };
  
  options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };


  ngOnInit(){
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 16;
        console.log('hola');
      },error => {

      },this.options);
    }
  }


  

  id = navigator.geolocation.watchPosition(function success(pos){
    
    var crd = pos.coords;
    console.log(crd.latitude);
    console.log(crd.longitude);
  }, this.error, this.options);

  constructor(){
    //if (navigator.geolocation) {
    //  navigator.geolocation.getCurrentPosition(this.displayLocationInfo);
   // }
  }

  successe(pos){
    var crd = pos.coords;
    var that=this;
    console.log(this);
    //console.log(crd);
    //console.log(this.lat);
    //if(crd.latitude != null && this.lat != null){
      //this.lat = crd.latitude;
    // }
    //this.lat = crd.latitude;
    //this.lng = crd.longitude;
    console.log(crd.latitude);
    console.log(crd.longitude);
    this.impi("sdffe","fse");

    //if (this.target.latitude === crd.latitude && this.target.longitude === crd.longitude) {
    //  console.log('Congratulations, you reached the target');
    //  navigator.geolocation.clearWatch(this.id);
    //}//
  }

  impi(uno,dos){
    console.log(uno,dos);
  }

  error(err){
    console.warn('ERROR(' + err.code + '): ' + err.message);
  }

  OnInit(){
    //if (navigator.geolocation) {
    //  navigator.geolocation.getCurrentPosition(this.displayLocationInfo);
    //}
  }

  displayLocationInfo(position) {
    const lng = position.coords.longitude;
    const lat = position.coords.latitude;
    console.log("holasxD");
    console.log(`longitude: ${ lng } | latitude: ${ lat }`);
  }

}



import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map:any;
  

  constructor() { }

  ngOnInit(): void {
    let loader=new Loader({
      apiKey:'AIzaSyAX45hu-aXrQK5OslwzN-BfbGq2i8gY0bQ'
    })
   loader.load().then(()=>{
    const location={lat: 36.8931502926,lng: 10.1878486926}
  this.map= new google.maps.Map(document.getElementById("map")as HTMLElement,{
    center:location,
    zoom:17
  })
  const marker=new google.maps.Marker({
    position: location,
    map:this.map,
   })
   })

   
  }

}

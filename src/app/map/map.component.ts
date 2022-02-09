import { Component, AfterViewInit } from '@angular/core';

import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    this.createMap();
  }


  createMap() {
    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwaXh1MjAwMCIsImEiOiJja3pjcmg0cDkwMTBrMnRxdWZtYngzdWh4In0.j8-jmph0x_IcARPVVcjRYg'
}).addTo(map);


  }

}

import { Component } from '@angular/core';

import * as L from 'leaflet';
import * as esri from 'esri-leaflet';

type RetailerProperties = {
  ADDRESS: string;
  ADDRESS2: string;
  CITY: string;
  County: string;
  OBJECTID: number;
  STATE: string;
  STORE_NAME: string;
  ZIP5: number;
  latitude: number;
  longitude: number;
  zip4: string;
};

const markerOptions: L.MarkerOptions = {
  icon: L.icon({
    iconSize: [25, 41],
    iconAnchor: [12, 10],
    iconUrl: 'assets/marker-icon.png',
    shadowUrl: 'assets/marker-shadow.png'
  })
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'site';

  options: L.MapOptions = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 14,
    center: L.latLng(38.957189, -77.352262)
  };

  onMapReady(map: L.Map) {
    const getCoordsBar = L.DomUtil.create('div', 'leaflet-bar leaflet-control') as HTMLDivElement;
    const getCoordsButton = L.DomUtil.create('a', null, getCoordsBar) as HTMLAnchorElement;
    getCoordsButton.innerText = 'CO';
    getCoordsButton.setAttribute('role', 'button');
    getCoordsButton.href = '#';
    getCoordsButton.onclick = (ev: MouseEvent) => {
      const bounds = map.getBounds();

      const { lat: south, lng: west } = bounds.getSouthWest();
      const { lat: north, lng: east } = bounds.getNorthEast();

      esri.query({
        url: 'http://snap-load-balancer-244858692.us-east-1.elb.amazonaws.com/ArcGIS/rest/services/retailer/MapServer/0'
      }).within(bounds).run((_, geoJson: GeoJSON.FeatureCollection<GeoJSON.Point, RetailerProperties>) => {
        for (const feature of geoJson.features) {
          const coordinates: [number, number] = [feature.properties.latitude, feature.properties.longitude];
          const marker = L.marker(coordinates, markerOptions).addTo(map)
            .bindPopup(`
              <strong>${feature.properties.STORE_NAME}</strong><br />
              <br />
              <strong>Address</strong><br />
              ${feature.properties.ADDRESS}<br />
              ${feature.properties.ADDRESS2 ? (feature.properties.ADDRESS2 + '<br />') : ''}
              ${feature.properties.CITY}, ${feature.properties.STATE} ${feature.properties.ZIP5}
            `);
        }
        console.log(geoJson);
      });
    };

    let info = new L.Control();
    info.onAdd = () => getCoordsBar;

    info.addTo(map);
  }
}

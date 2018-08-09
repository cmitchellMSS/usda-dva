import { Component } from '@angular/core';

import * as L from 'leaflet';
import * as esri from 'esri-leaflet';

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
      }).within(bounds).run((_, geoJson: GeoJSON.FeatureCollection, fields: any) => {
        console.log(geoJson);
        console.log(fields);
      });
    };

    let info = new L.Control();
    info.onAdd = () => getCoordsBar;

    info.addTo(map);
  }
}

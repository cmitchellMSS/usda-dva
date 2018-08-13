import { Component, OnInit } from '@angular/core';

import * as L from 'leaflet';
import { throttle } from 'lodash';
import { LocationsService, LocationKind, MapLocation } from '../locations.service';
import { MapService, LocationFilter } from '../map.service';

const icons: { [key in LocationKind]: L.Icon } = {
  market: L.icon({
    iconSize: [23, 40],
    iconAnchor: [11, 40],
    popupAnchor: [0, -25],
    iconUrl: 'assets/market-pin.png',
    shadowUrl: 'assets/marker-shadow.png',
  }),
  retail: L.icon({
    iconSize: [23, 40],
    iconAnchor: [11, 40],
    popupAnchor: [0, -25],
    iconUrl: 'assets/retailer-pin.png',
    shadowUrl: 'assets/marker-shadow.png',
  })
};

@Component({
  selector: 'app-snap-map',
  templateUrl: './snap-map.component.html',
  styleUrls: ['./snap-map.component.scss'],
  providers: [LocationsService]
})
export class SnapMapComponent implements OnInit {
  options: L.MapOptions = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 14,
    center: L.latLng(38.957189, -77.352262)
  };

  map: L.Map;
  marketsMarkers: L.LayerGroup;
  retailerMarkers: L.LayerGroup;

  constructor(
    private locationsService: LocationsService,
    private mapService: MapService
  ) { }

  ngOnInit() {
    
  }

  onMapReady(map: L.Map) {
    this.map = map;

    // Layer to keep track of markers for easy removal
    this.retailerMarkers = L.layerGroup();//.addTo(map);
    this.marketsMarkers = L.layerGroup();//.addTo(map);

    // Attempt to user the browsers geolocation to set the map location
    if (navigator && navigator.geolocation && navigator.geolocation.getCurrentPosition) {
      navigator.geolocation.getCurrentPosition(position => {
        map.setView({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }, 15);
      });
    }

    // Update pins when the map view changes
    const boundUpdatePins = this.onMapMove.bind(this, map);
    const throttledUpdatePins = throttle(boundUpdatePins, 1000, { leading: false });
    map.on('move', throttledUpdatePins);

    this.mapService.locationFilter.subscribe(this.updateMapFilters.bind(this));
    this.locationsService.locations.subscribe(this.updateMapMarkers.bind(this));
  }

  private async onMapMove(map: L.Map) {
    const bounds = map.getBounds();

    this.locationsService.updateLocation(bounds);
  }

  private updateMapFilters(filters: LocationFilter) {
    if (filters.market) {
      this.marketsMarkers.addTo(this.map);
    } else {
      this.marketsMarkers.removeFrom(this.map);
    }

    if (filters.retail) {
      this.retailerMarkers.addTo(this.map);
    } else {
      this.retailerMarkers.removeFrom(this.map);
    }
    //this.marketsMarkers.
  }

  private updateMapMarkers(locations: MapLocation[]) {
    this.marketsMarkers.clearLayers();
    this.retailerMarkers.clearLayers();

    for (const location of locations) {
      const marker = L.marker(location, {
        icon: icons[location.kind]
      })
        .bindPopup(`
          <strong>${location.name}</strong><br />
          <br />
          <strong>Address</strong><br />
          ${location.address1}<br />
          ${location.address2 ? (location.address2 + '<br />') : ''}
          ${location.city}, ${location.state} ${location.zip}
        `);
      if (location.kind === 'market') {
        marker.addTo(this.marketsMarkers);
      } else if (location.kind === 'retail') {
        marker.addTo(this.retailerMarkers);
      }
    }
  }
}

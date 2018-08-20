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
  office: L.icon({
    iconSize: [23, 40],
    iconAnchor: [11, 40],
    popupAnchor: [0, -25],
    iconUrl: 'assets/office-pin.png',
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
  styleUrls: ['./snap-map.component.scss']
})
export class SnapMapComponent implements OnInit {
  options: L.MapOptions = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a target="_blank" href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      })
    ],
    zoom: 14,
    center: L.latLng(38.957189, -77.352262),
    attributionControl: false,
  };

  map: L.Map;
  marketMarkers: L.LayerGroup;
  officeMarkers: L.LayerGroup;
  retailerMarkers: L.LayerGroup;

  constructor(
    private locationsService: LocationsService,
    private mapService: MapService
  ) { }

  ngOnInit() {
    
  }

  onMapReady(map: L.Map) {
    this.map = map;

    L.control.attribution({
      prefix: '<a target="_blank" href="https://leafletjs.com/">Leaflet</a>'
    }).addTo(map);

    // Layer to keep track of markers for easy removal
    this.retailerMarkers = L.layerGroup();
    this.officeMarkers = L.layerGroup();
    this.marketMarkers = L.layerGroup();

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
    const boundUpdatePins = this.onMapMove.bind(this);
    const throttledUpdatePins = throttle(boundUpdatePins, 1000, { leading: false });
    map.on('move', throttledUpdatePins);
    throttledUpdatePins();

    this.mapService.locationFilter.subscribe(this.updateMapFilters.bind(this));
    this.locationsService.locations.subscribe(this.updateMapMarkers.bind(this));
  }

  private async onMapMove() {
    const bounds = this.map.getBounds();

    this.locationsService.updateLocation(bounds);
  }

  private updateMapFilters(filters: LocationFilter) {
    if (filters.market) {
      this.marketMarkers.addTo(this.map);
    } else {
      this.marketMarkers.removeFrom(this.map);
    }

    if (filters.office) {
      this.officeMarkers.addTo(this.map);
    } else {
      this.officeMarkers.removeFrom(this.map);
    }

    if (filters.retail) {
      this.retailerMarkers.addTo(this.map);
    } else {
      this.retailerMarkers.removeFrom(this.map);
    }
  }

  private updateMapMarkers(locations: MapLocation[]) {
    this.marketMarkers.clearLayers();
    this.officeMarkers.clearLayers();
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
        marker.addTo(this.marketMarkers);
      } else if (location.kind === 'office') {
        marker.addTo(this.officeMarkers);
      } else if (location.kind === 'retail') {
        marker.addTo(this.retailerMarkers);
      }
    }
  }
}

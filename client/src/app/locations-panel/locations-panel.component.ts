import { Component, OnInit } from '@angular/core';
import { LocationsService, MapLocation } from '../locations.service';

@Component({
  selector: 'app-locations-panel',
  templateUrl: './locations-panel.component.html',
  styleUrls: ['./locations-panel.component.scss']
})
export class LocationsPanelComponent implements OnInit {

  locations: MapLocation[];

  constructor(private locationService: LocationsService) { }

  ngOnInit() {
    this.locationService.locations.subscribe(locations => {
      this.locations = locations;
    });
  }

}

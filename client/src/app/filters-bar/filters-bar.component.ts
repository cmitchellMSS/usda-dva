import { Component, OnInit } from '@angular/core';
import { MapService, LocationFilter } from '../map.service';
import { LocationKind } from '../locations.service';

@Component({
  selector: 'app-filters-bar',
  templateUrl: './filters-bar.component.html',
  styleUrls: ['./filters-bar.component.scss']
})
export class FiltersBarComponent implements OnInit {

  locationsFilterState: LocationFilter = {
    market: true,
    retail: true,
  };

  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.mapService.locationFilter.next(this.locationsFilterState);
  }

  toggleLocationFilter(kind: LocationKind) {
    this.locationsFilterState[kind] = !this.locationsFilterState[kind];
    this.mapService.locationFilter.next(this.locationsFilterState);
  }

}

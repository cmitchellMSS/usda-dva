import { Component, OnInit, Input } from '@angular/core';
import { MapLocation } from '../locations.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  @Input()
  location: MapLocation;

  constructor() { }

  ngOnInit() {
  }

}

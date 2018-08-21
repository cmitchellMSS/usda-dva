import { Component, OnInit, Input } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

import { MapLocation } from '../locations.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  @Input()
  location: MapLocation;

  rating: number;

  constructor(public ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
    this.rating = Math.floor(Math.random() * 5) + 1;
  }

}

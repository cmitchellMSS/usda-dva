import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-tell-sonny-location-modal',
  templateUrl: './tell-sonny-location-modal.component.html',
  styleUrls: ['./tell-sonny-location-modal.component.scss']
})
export class TellSonnyLocationModalComponent implements OnInit {

  constructor(public ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
  }

  submit() {
    this.ngxSmartModalService.close('tellSonnyLocationModal');
    this.ngxSmartModalService.open('thankYouModal');
  }
  
}

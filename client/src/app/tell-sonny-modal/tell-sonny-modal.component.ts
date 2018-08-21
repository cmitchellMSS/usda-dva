import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-tell-sonny-modal',
  templateUrl: './tell-sonny-modal.component.html',
  styleUrls: ['./tell-sonny-modal.component.scss']
})
export class TellSonnyModalComponent implements OnInit {

  constructor(public ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
  }

  submit() {
    this.ngxSmartModalService.close('tellSonnyModal');
    this.ngxSmartModalService.open('thankYouModal');
  }
  
}

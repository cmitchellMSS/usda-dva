import { Component, OnInit, ElementRef } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-tell-sonny-location-modal',
  templateUrl: './tell-sonny-location-modal.component.html',
  styleUrls: ['./tell-sonny-location-modal.component.scss']
})
export class TellSonnyLocationModalComponent implements OnInit {

  constructor(public element: ElementRef<HTMLElement>, public ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
  }

  onOpen() {
    setTimeout(() => {
      console.log(this.element);

      const overlay = this.element.nativeElement.querySelector<HTMLDivElement>('.overlay');
      overlay.setAttribute('role', 'dialog');
      overlay.setAttribute('aria-labelledby', 'tslm-dialog-title');
      overlay.setAttribute('aria-describedby', 'tslm-dialog-description');
      overlay.setAttribute('tabindex', '-1');
      overlay.focus();

      const dialog = this.element.nativeElement.querySelector<HTMLDivElement>('.nsm-dialog');
      dialog.setAttribute('role', 'document');
    });
  }

  submit() {
    this.ngxSmartModalService.close('tellSonnyLocationModal');
    this.ngxSmartModalService.open('thankYouModal');
  }

}

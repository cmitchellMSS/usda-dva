import { Component, OnInit, ElementRef } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-tell-sonny-modal',
  templateUrl: './tell-sonny-modal.component.html',
  styleUrls: ['./tell-sonny-modal.component.scss']
})
export class TellSonnyModalComponent implements OnInit {

  constructor(public element: ElementRef<HTMLElement>, public ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
  }

  onOpen() {
    setTimeout(() => {
      console.log(this.element);

      const overlay = this.element.nativeElement.querySelector<HTMLDivElement>('.overlay');
      overlay.setAttribute('role', 'dialog');
      overlay.setAttribute('aria-labelledby', 'tsm-dialog-title');
      overlay.setAttribute('aria-describedby', 'tsm-dialog-description');
      overlay.setAttribute('tabindex', '-1');
      overlay.focus();

      const dialog = this.element.nativeElement.querySelector<HTMLDivElement>('.nsm-dialog');
      dialog.setAttribute('role', 'document');
    });
  }

  submit() {
    this.ngxSmartModalService.close('tellSonnyModal');
    this.ngxSmartModalService.open('thankYouModal');
  }
  
}

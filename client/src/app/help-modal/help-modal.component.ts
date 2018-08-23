import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-help-modal',
  templateUrl: './help-modal.component.html',
  styleUrls: ['./help-modal.component.scss']
})
export class HelpModalComponent implements OnInit {

  constructor(public element: ElementRef<HTMLElement>, ) { }

  ngOnInit() {
  }

  onOpen() {
    setTimeout(() => {
      console.log(this.element);

      const overlay = this.element.nativeElement.querySelector<HTMLDivElement>('.overlay');
      overlay.setAttribute('role', 'dialog');
      overlay.setAttribute('aria-labelledby', 'hm-dialog-title');
      overlay.setAttribute('aria-describedby', 'hm-dialog-description');
      overlay.setAttribute('tabindex', '-1');
      overlay.focus();

      const dialog = this.element.nativeElement.querySelector<HTMLDivElement>('.nsm-dialog');
      dialog.setAttribute('role', 'document');
    });
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating-control',
  templateUrl: './rating-control.component.html',
  styleUrls: ['./rating-control.component.scss']
})
export class RatingControlComponent implements OnInit {

  @Input()
  currentRating: number;

  @Output()
  ratingChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  selectRating(newRating: number) {
    this.ratingChange.emit(newRating);
  }

}

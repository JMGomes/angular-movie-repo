import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {Movie} from "../../../model/Movie";

@Component({
  selector: 'app-movie-rate-star-display',
  templateUrl: './movie-rate-star-display.component.html',
  styleUrls: ['./movie-rate-star-display.component.scss']
})
export class MovieRateStarDisplayComponent implements OnInit {
  @Input() rate: number = 0;
  label: 'bad-review' | 'average-review' | 'good-review';

  buildLabel() {
    if (this.rate < 3) {
      this.label = "bad-review";
    } else if (this.rate < 6) {
      this.label = "average-review";
    } else {
      this.label = "good-review";
    }
  }

  ngOnInit(): void {
    this.buildLabel();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.buildLabel();
  }
}

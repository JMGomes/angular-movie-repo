import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Movie} from "../../model/Movie";

class MovieRateDialogData {
  movie: Movie;
}

@Component({
  selector: 'app-movie-rate-dialog',
  templateUrl: './movie-rate-dialog.component.html',
  styleUrls: ['./movie-rate-dialog.component.scss']
})
export class MovieRateDialogComponent {
  review: number = 0;

  constructor(
    public dialogRef: MatDialogRef<MovieRateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MovieRateDialogData,
  ) {}

  submitReview() {
    this.dialogRef.close(this.review);
  }

  sliderValueChanged(review: number | null) {
    if (review) {
      this.review = review;
    }
  }
}

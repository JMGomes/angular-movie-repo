import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MovieApiService} from "../../services/api/movie-api.service";
import {Movie} from "../../model/Movie";
import {MovieRateDialogComponent} from "../movie-rate-dialog/movie-rate-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  @Input() movies: Movie[];
  @Input() searchTerm: string = '';
  @Output() deleteMovieEvent = new EventEmitter<Movie>();
  @Output() updateMovieRate = new EventEmitter<{movie: Movie, rate: number}>();
  displayedColumns: string[] = ['name', 'year', 'actor', 'rate', 'delete'];

  constructor(public dialog: MatDialog) { }

  deleteMovie(movie: Movie) {
    this.deleteMovieEvent.emit(movie);
  }

  openRateDialog(movie: Movie) {
    const dialogRef = this.dialog.open(MovieRateDialogComponent, {
      width: '500px',
      data: {movie: movie},
    });

    dialogRef.afterClosed().subscribe(rate => {
      if (rate != null) {
        this.updateMovieRate.emit({movie, rate});
      }
    });
  }
}







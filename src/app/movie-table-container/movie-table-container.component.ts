import { Component, OnInit } from '@angular/core';
import {MovieStoreService} from "../../services/movie-store.service";
import {Movie} from "../../model/Movie";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-movie-table-container',
  templateUrl: './movie-table-container.component.html',
  styleUrls: ['./movie-table-container.component.scss']
})
export class MovieTableContainerComponent implements OnInit {
  movies: Movie[] = [];
  searchTerm: string = '';

  constructor(private movieStore: MovieStoreService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.movieStore.getMovies().subscribe(movies => this.movies = movies);
  }

  newTermReceived(newTerm: string) {
    this.searchTerm = newTerm;
  }

  deleteMovieFromStore(m: Movie) {
    this.movieStore.removeMovie(m);
    this._snackBar.open(`${m.name} Removed`);
  }

  updateMovieRatingFromStore(movieRate: {movie: Movie; rate: number}) {
    this.movieStore.updateMovieRating(movieRate.movie, movieRate.rate);
  }
}

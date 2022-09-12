import {Movie} from "../model/Movie";
import {BehaviorSubject, Observable, of} from "rxjs";
import {MovieApiService} from "./api/movie-api.service";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class MovieStoreService {
  movies$ = new BehaviorSubject<Movie[]>([]);
  term$ = new BehaviorSubject<string>('');

  constructor(private movieApiService: MovieApiService) {
    this.movieApiService.fetchAllMovies().subscribe(
      movies=> this.movies$.next(movies));
  }

  getMovies(): Observable<Movie[]> {
    return this.movies$.asObservable();
  }

  addMovie(movie: Movie) {
    if (!this.movies$.value.includes(movie)) {
      this.movies$.next([...this.movies$.value, movie]);
    }
  }

  removeMovie(movie: Movie) {
    const movies: Movie[] = this.movies$.value.filter(
      (p: Movie) => p.name !== movie.name
    );
    this.movies$.next(movies);
  }

  updateMovieRating(movieToRate: Movie, newRating: number) {
    const movies: Movie[] = this.movies$.value.map(
      (movie) => {
        if (movie.name != movieToRate.name) {
          return movie;
        } else {
          movie.rate = newRating;
          return movie;
        }
      }
    );
    this.movies$.next(movies);
  }

  getTerm(): BehaviorSubject<string> {
    return this.term$;
  }

  setTerm(): BehaviorSubject<string> {
    return this.term$;
  }
}

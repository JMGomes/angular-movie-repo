import {Injectable} from "@angular/core";
import { Movie } from "src/model/Movie";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class MovieApiService {
  public fetchAllMovies(): Observable<Movie[]> {
    const movies: Movie[] = [
      {
        name: "The Shawshank Redemption",
        year: '1994',
        rate: 2,
        actor: {
          name: 'Tim Robbins',
        }
      },
      {
        name: "The Godfather",
        year: '1972',
        rate: 8,
        actor: {
          name: 'Marlon Brando',
        }
      },
      {
        name: "12 Angry Men",
        year: '1957',
        rate: 8,
        actor: {
          name: 'Henry Fonda',
        }
      },
      {
        name: "Inception",
        year: '2010',
        rate: 3,
        actor: {
          name: 'Leonardo DiCaprio',
        }
      },
      {
        name: "Saving Private Ryan",
        year: '1998',
        rate: 5,
        actor: {
          name: 'Tom Hanks',
        }
      },
      {
        name: "Interstellar",
        year: '2014',
        rate: 9,
        actor: {
          name: 'Matthew McConaughey',
        }
      },
      {
        name: "Whiplash",
        year: '2014',
        rate: 3,
        actor: {
          name: 'Miles Teller',
        }
      }
    ];
    return of(movies);
  }
}

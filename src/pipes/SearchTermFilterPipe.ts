import { Pipe, PipeTransform } from '@angular/core';
import {Movie} from "../model/Movie";

@Pipe({
  name: 'searchTermFilter',
  pure: false
})
export class SearchTermFilterPipe implements PipeTransform {
  transform(movies: Movie[], searchTerm: string): Movie[] {
    if (!movies || !searchTerm) {
      return movies;
    }
    const searchTermLC = searchTerm.toLowerCase();
    return movies.filter(movie =>
      movie.name.toLowerCase().includes(searchTermLC) ||
      movie.year.toLowerCase().includes(searchTermLC) ||
      movie.actor.name.toLowerCase().includes(searchTermLC)
    );
  }
}

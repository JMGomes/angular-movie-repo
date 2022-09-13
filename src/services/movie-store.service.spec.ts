import {MovieStoreService} from "./movie-store.service";
import {MovieApiService} from "./api/movie-api.service";
import {of} from "rxjs";
import {Movie} from "../model/Movie";

describe('MovieStoreService', () => {
  describe('MovieStoreService - empty list from api service', () => {
    let service: MovieStoreService;
    beforeEach(() => {
      const fakeMovieApiService = {fetchAllMovies: () => of([])};
      service = new MovieStoreService(fakeMovieApiService as MovieApiService);
    });

    it('should return empty movies',
        (done: DoneFn) => {
          service.getMovies().subscribe((value) => {
            expect(value).toEqual([]);
            done();
          });
        });

    it('should persist movie after add movie', () => {
      const movieToAdd: Movie = {
        name: 'movieName',
        year: '2019',
        actor: {
          name: 'Tom Hanks'
        },
        rate: 0
      };
      service.addMovie(movieToAdd);
      service.getMovies().subscribe((value) => {
        expect(value).toEqual([movieToAdd]);
      });
    });

    it('updateMovieRating() should update movie rate correctly', () => {
      const movieToAdd: Movie = {
        name: 'movieName',
        year: '2019',
        actor: {
          name: 'Tom Hanks'
        },
        rate: 0
      };
      service.addMovie(movieToAdd);
      service.updateMovieRating(movieToAdd, 8);
      service.getMovies().subscribe((value) => {
        expect(value[0].rate).toEqual(8);
      });
    });
  });

  describe('MovieStoreService - with populated list from api service', () => {
    let service: MovieStoreService;
    beforeEach(() => {
      const fakeMovieApiService = {
        fetchAllMovies: () => of([{
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
          }])
      };
      service = new MovieStoreService(fakeMovieApiService as MovieApiService);
    });

    it('should return movies correctly',
        (done: DoneFn) => {
          service.getMovies().subscribe((value) => {
            expect(value).toEqual([{
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
              }]);
            done();
          });
        });

    it('should persist movie after add movie', () => {
      const movieToAdd: Movie = {
        name: 'movieName',
        year: '2019',
        actor: {
          name: 'Tom Hanks'
        },
        rate: 0
      };
      service.addMovie(movieToAdd);
      service.getMovies().subscribe((value) => {
        expect(value.length === 3).toBeTruthy();
      });
    });

    it('removeMovie() should update movie rate correctly', () => {
      const movieToRemove: Movie = {
        name: 'The Shawshank Redemption',
        year: '2019',
        actor: {
          name: 'Tom Hanks'
        },
        rate: 0
      };
      service.removeMovie(movieToRemove);
      service.getMovies().subscribe((value) => {
        expect(value.length === 1).toBeTruthy();
      });
    });
  });
});
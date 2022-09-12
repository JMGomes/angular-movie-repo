import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MovieStoreService} from "../../services/movie-store.service";
import {Movie} from "../../model/Movie";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router, RouterModule} from "@angular/router";

const actorsArray: string[] = [
  'Tom Cruise',
  'Johnny Depp',
  'Tom Hanks',
  'Jack Nicholson',
  'Matt Damon',
  'Owen Wilson',
];

@Component({
  selector: 'app-movie-add-new',
  templateUrl: './movie-add-new.component.html',
  styleUrls: ['./movie-add-new.component.scss']
})
export class MovieAddNewComponent {
  constructor(private formBuilder: FormBuilder,
              private moviesStore: MovieStoreService,
              private _snackBar: MatSnackBar,
              private router: Router) {}

  actors = actorsArray;
  formGroup: FormGroup =
    this.formBuilder.group({
      'name': [null, Validators.compose(
        [Validators.required,
          Validators.min(2),
          Validators.minLength(2)])],
      'year': ['', Validators.compose([
        Validators.required,
        Validators.pattern("^[0-9]*"),
        Validators.minLength(4),
        Validators.maxLength(4)])],
      'actor': [null, Validators.required],
    });

  onSubmit(value: any) {
    const movieToAdd : Movie = {
      name: value.name,
      year: value.year,
      actor: {
        name: value.actor
      },
      rate: 0
    }
    this.moviesStore.addMovie(movieToAdd);
    this._snackBar.open(`${movieToAdd.name} Added`, undefined, { duration: 2000});
    this.router.navigateByUrl('main');
  }
}

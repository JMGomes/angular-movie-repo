import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatRippleModule} from "@angular/material/core";
import {ReactiveFormsModule} from "@angular/forms";
import { MovieTableContainerComponent } from './components/movie-table-container/movie-table-container.component';
import {SearchTermFilterPipe} from "../pipes/SearchTermFilterPipe";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import { MovieRateDialogComponent } from './components/movie-rate-dialog/movie-rate-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatSliderModule} from "@angular/material/slider";
import { MovieRateStarDisplayComponent } from './components/movie-rate-star-display/movie-rate-star-display.component';
import {RouterModule} from "@angular/router";
import { MovieAddNewComponent } from './components/movie-add-new/movie-add-new.component';
import {MatSelectModule} from "@angular/material/select";
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    SearchMovieComponent,
    AddMovieComponent,
    MovieTableContainerComponent,
    SearchTermFilterPipe,
    MovieRateDialogComponent,
    MovieRateStarDisplayComponent,
    MovieAddNewComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatSliderModule,
    MatSnackBarModule,
    RouterModule.forRoot([
      {path: 'add-movie', component: MovieAddNewComponent},
      {path: 'main', component: MovieTableContainerComponent},
      {path: '', redirectTo: '/main', pathMatch: 'full'},
    ],{ useHash: true }),
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

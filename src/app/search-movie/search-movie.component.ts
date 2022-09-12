import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {filter, Subscription} from "rxjs";

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {
  @Output() termEvent = new EventEmitter<string>();
  searchControl = new FormControl('', []);
  sub?: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.sub = this.searchControl.valueChanges
      .subscribe(
      (term) => { if (term != null) this.termEvent.emit(term)}
    );
  }

  ngOnDestroy() {
    if(this.sub) {
      this.sub.unsubscribe();
    }
  }

}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieRateDialogComponent } from './movie-rate-dialog.component';

describe('MovieRateDialogComponent', () => {
  let component: MovieRateDialogComponent;
  let fixture: ComponentFixture<MovieRateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieRateDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieRateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

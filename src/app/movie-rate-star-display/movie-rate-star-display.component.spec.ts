import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieRateStarDisplayComponent } from './movie-rate-star-display.component';

describe('MovieRateStarDisplayComponent', () => {
  let component: MovieRateStarDisplayComponent;
  let fixture: ComponentFixture<MovieRateStarDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieRateStarDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieRateStarDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTableContainerComponent } from './movie-table-container.component';

describe('MovieTableContainerComponent', () => {
  let component: MovieTableContainerComponent;
  let fixture: ComponentFixture<MovieTableContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieTableContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieTableContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

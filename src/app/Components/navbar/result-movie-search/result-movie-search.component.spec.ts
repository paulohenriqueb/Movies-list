import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultMovieSearchComponent } from './result-movie-search.component';

describe('ResultMovieSearchComponent', () => {
  let component: ResultMovieSearchComponent;
  let fixture: ComponentFixture<ResultMovieSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultMovieSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultMovieSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

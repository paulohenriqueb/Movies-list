import { Component, Input, OnInit } from '@angular/core';
import { Movies } from 'src/app/Models/movie.models';

@Component({
  selector: 'app-result-movie-search',
  templateUrl: './result-movie-search.component.html',
  styleUrls: ['./result-movie-search.component.css']
})
export class ResultMovieSearchComponent implements OnInit {
  //movieResult? : string[];
  @Input() movieSearchResult? : Movies[];
  posterPath: string = 'https://image.tmdb.org/t/p/w370_and_h556_bestv2';
  @Input() titleSearch?: any;
  constructor() { }

  ngOnInit(): void {
  }

}

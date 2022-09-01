import { Component, Input, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { Movies } from 'src/app/Models/movie.models';
import { MovieService } from 'src/app/service/movie.service';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-home-movies',
  templateUrl: './home-movies.component.html',
  styleUrls: ['./home-movies.component.css']
})
export class HomeMoviesComponent implements OnInit {
  @Input() movieSearchList?: string[];
  movieList?: Movies[];
  posterPath: string = 'https://image.tmdb.org/t/p/w370_and_h556_bestv2';
  
  constructor(private movies: MovieService) { }

  ngOnInit(): void {
    this.homeMovie();
  }

  homeMovie(){
    this.movies.getAllMovies()
    .pipe( map((props:any) =>{
      return props.results;
    } ))
    .subscribe((resp)=>{
      this.movieList = resp;
      // this.movieList = resp.results
      // console.log(this.movieList);
    })
  }

}

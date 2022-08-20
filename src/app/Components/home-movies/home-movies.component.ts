import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-home-movies',
  templateUrl: './home-movies.component.html',
  styleUrls: ['./home-movies.component.css']
})
export class HomeMoviesComponent implements OnInit {
  movieList?: any[];
  constructor(private movies: MovieService) { }

  ngOnInit(): void {
    this.homeMovie();
  }

  homeMovie(){
    this.movies.getAllMovies().subscribe((resp: any)=>{
      this.movieList = resp.results
      console.log(this.movieList);
    })
  }

}

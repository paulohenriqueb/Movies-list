import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, fromEvent, Observable, of, switchMap } from 'rxjs';
import { Movies } from 'src/app/Models/movie.models';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('searchMovie', {static:true}) el?:ElementRef;
  movieSearch: string = "";
  moviesList?: Movies[];

  constructor(private movies: MovieService) { }

  ngOnInit(): void {
    this.filterMovie(this.movieSearch);
  }
  filterMovie(movieSearch: string){
    let keyup$ = fromEvent(this.el?.nativeElement, 'keyup');
    keyup$.pipe(
        debounceTime(700),
        switchMap( ()=>{ return this.movies.searchMovies(this.movieSearch)})
      ).subscribe(
        (movieData : any)=>{
          return this.moviesList = movieData.results;
        }
      )

  }

  
}

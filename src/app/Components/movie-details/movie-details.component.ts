import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movies$?: Observable<any>;
  posterPath: string = 'https://image.tmdb.org/t/p/w370_and_h556_bestv2';
  constructor(
      private movieService: MovieService,
      private route: ActivatedRoute,
      private router: Router
    ) { }

  ngOnInit(): void {
    let i: number = +this.route.snapshot.paramMap.get('index')!;
    console.dir(this.movieService.getOneMovie(i));
    this.movies$ = this.movieService.getOneMovie(i);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Movies } from '../Models/movie.models';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }
  readonly baseUrl: string = 'https://api.themoviedb.org/3/';
  private readonly api_key: string ='0a5eeeb915a9364b63a24a467d9ead4c';
  readonly lang: string = 'pt-BR'
  //https://api.themoviedb.org/3/discover/movie?api_key=0a5eeeb915a9364b63a24a467d9ead4c&language=pt-BR

  getAllMovies():Observable<Movies>{
    return this.http.get<Movies>(`${this.baseUrl}discover/movie?api_key=${this.api_key}&language=${this.lang}`);
  }

}

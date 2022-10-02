import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Movies } from '../Models/movie.models';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }
  readonly baseUrl: string = 'https://api.themoviedb.org/3/';
  private readonly api_key: string ='api_key=0a5eeeb915a9364b63a24a467d9ead4c';
  readonly lang: string = 'pt-BR'
  //https://api.themoviedb.org/3/discover/movie?api_key=0a5eeeb915a9364b63a24a467d9ead4c&language=pt-BR

  getAllMovies():Observable<Movies>{
    return this.http.get<Movies>(`${this.baseUrl}discover/movie?${this.api_key}&language=${this.lang}`);
  }

  searchMovies(param:string):Observable<Movies[]>{
    if(param.length==0){
      return of([]);
    }
    return this.http.get<Movies[]>(`${this.baseUrl}search/movie?${this.api_key}&language=${this.lang}&query=${param}`);
  }

  getOneMovie(id:number):Observable<Movies[]>{
    console.log(`${this.baseUrl}movie/${id}?${this.api_key}&language=${this.lang}`)
    return this.http.get<Movies[]>(`${this.baseUrl}movie/${id}?${this.api_key}&language=${this.lang}`);
  }

}

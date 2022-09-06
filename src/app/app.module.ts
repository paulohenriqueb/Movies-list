import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeMoviesComponent } from './Components/home-movies/home-movies.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule  } from './material.module';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ResultMovieSearchComponent } from './Components/navbar/result-movie-search/result-movie-search.component';
import { MovieDetailsComponent } from './Components/movie-details/movie-details.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';

const appRoutes: Routes =[
  {path:'', component: HomeMoviesComponent},
  {path: 'movie/:index', component: MovieDetailsComponent},
  {path: '**', component: PageNotFoundComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeMoviesComponent,
    NavbarComponent,
    ResultMovieSearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

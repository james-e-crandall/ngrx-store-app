import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../movies/movie';
import { FormsModule } from '@angular/forms';
import { MoviesService } from '../movies/movies-service';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-movies-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './movies-page.html',
  styleUrl: './movies-page.css'
})
export class MoviesPage {
  // private moviesService = inject(MoviesService);
  // protected movies: Movie[] = [];

  // ngOnInit() {
  //   this.moviesService.getAll()
  //     .subscribe(movies => this.movies = movies);
  // }

  private store = inject(Store<{ movies: Movie[] }>);
  protected movies$ = this.store.select(state => state.movies);

  ngOnInit() {
    this.store.dispatch({ type: '[Movies Page] Load Movies' });
  }

}

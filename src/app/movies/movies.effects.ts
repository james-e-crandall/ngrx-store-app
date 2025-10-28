import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { MoviesService } from './movies-service';

@Injectable()
export class MoviesEffects {
  private actions$ = inject(Actions);
  private moviesService = inject(MoviesService);

  loadMovies$ = createEffect(() => {
    return this.actions$.pipe(
        ofType('[Movies Page] Load Movies'),
        exhaustMap(() => this.moviesService.getAll()
          .pipe(
            map(movies => ({ type: '[Movies API] Movies Loaded Success', payload: movies })),
            catchError(() => EMPTY)
          ))
    );
  });
}
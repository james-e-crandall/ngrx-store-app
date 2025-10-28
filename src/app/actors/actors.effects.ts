import { inject } from '@angular/core';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { ActorsApi } from './actors-api';
import * as ActorsPageActions from './actors-page.actions';
import * as ActorsApiActions from './actors-api.actions';

export const loadActors = createEffect(
  (actions$ = inject(Actions), actorsService = inject(ActorsApi)) => {
    return actions$.pipe(
      ofType(ActorsPageActions.opened),
      exhaustMap(() =>
        actorsService.getAll().pipe(
          map((actors) => ActorsApiActions.actorsLoadedSuccess({ actors })),
          catchError((error: { message: string }) =>
            of(ActorsApiActions.actorsLoadedFailure({ errorMsg: error.message }))
          )
        )
      )
    );
  },
  { functional: true }
);

export const displayErrorAlert = createEffect(
  () => {
    return inject(Actions).pipe(
      ofType(ActorsApiActions.actorsLoadedFailure),
      tap(({ errorMsg }) => alert(errorMsg))
    );
  },
  { functional: true, dispatch: false }
);
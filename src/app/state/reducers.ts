import { createAction, createReducer, props, on } from '@ngrx/store';
import { Game } from '../Game';
import * as ScoreboardPageActions from './scoreboard-page.actions';

export const homeScore = createAction('[Scoreboard Page] Home Score');
export const awayScore = createAction('[Scoreboard Page] Away Score');
export const resetScore = createAction('[Scoreboard Page] Score Reset');
export const setScores = createAction('[Scoreboard Page] Set Scores', props<{game: Game}>());

export interface State {
  home: number;
  away: number;
}

export const initialState: State = {
  home: 0,
  away: 0,
};

export const scoreboardReducer = createReducer(
  initialState,
  on(homeScore, state => ({ ...state, home: state.home + 1 })),
  on(awayScore, state => ({ ...state, away: state.away + 1 })),
  on(resetScore, state => ({ home: 0, away: 0 })),
  on(setScores, (state, { game }) => ({ home: game.home, away: game.away }))
);


import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from '../state/counter.actions';

@Component({
  selector: 'app-my-counter',
  imports: [AsyncPipe],
  templateUrl: './my-counter.component.html',
})
export class MyCounterComponent {
  count$: Observable<number>

  constructor(private store: Store<{ count: number }>) {
    //this.count$ = store.select('count');
    this.count$ = store.select(state => state.count);
  }

  increment() {
   this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
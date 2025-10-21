import { Component, input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadBook } from '../state/books.actions.js';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-component',
  imports: [AsyncPipe, FormsModule],
  templateUrl: './book-component.html',
  styleUrl: './book-component.css'
})
export class BookComponent {
  id$: Observable<number>
  bookId = input.required<number>();

  newBookId: number = 1;
  constructor(private store: Store<{ id: number }>) {
    store.dispatch(() => loadBook({ id: this.bookId() }));
    this.id$ = store.select(state => state.id);
  }

  load(id: number) 
  {
    console.log(`Loading book with ID: ${id}`);
    // Implementation for loading a book by its ID
  }

  updateBookId() {
    this.store.dispatch(() => loadBook({ id: this.newBookId }));
  }
}

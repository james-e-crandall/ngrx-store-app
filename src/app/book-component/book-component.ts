import { Component, input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadBook } from '../books/books.actions.js';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BookSearch } from './book-search/book-search';

@Component({
  selector: 'app-book-component',
  imports: [AsyncPipe, FormsModule, BookSearch],
  templateUrl: './book-component.html',
  styleUrl: './book-component.css'
})
export class BookComponent {
  id$: Observable<number>
  bookId = input.required<number>();

  newBookId: number = 1;
  constructor(private store: Store<{ id: number }>) {
    store.dispatch(() => loadBook({ id: this.bookId(), message:'constructor' }));
    this.id$ = store.select(state => state.id);
  }

  load(id: number, message:string) 
  {
    console.log(`------------------->> load: book with ID: ${id} ${message}`);
    // Implementation for loading a book by its ID
  }

  updateBookId() {
    console.log(`updateBookId: book with ID: ${this.newBookId}`);
    this.store.dispatch(() => loadBook({ id: this.newBookId, message:'updateBookId' }));
  }
}

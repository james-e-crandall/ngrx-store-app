import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { Book } from './book';
import { computed, inject } from '@angular/core';
import { Component } from '@angular/core';
import { BookService } from './book-service';

type BookSearchState = {
  books: Book[];
  isLoading: boolean;
  filter: { query: string; order: 'asc' | 'desc' };
};

const initialState: BookSearchState = {
  books: [],
  isLoading: false,
  filter: { query: '', order: 'asc' },
};

// export const BookSearchStore = signalStore(
//   withState(initialState)
// );

export const BookSearchStore = signalStore(
  withState(initialState),
  // 👇 Accessing previously defined state signals and properties.
  withComputed(({ books, filter }) => ({
    booksCount: computed(() => books().length),
    // 👇 Adds computed automatically
    sortedBooks: () => {
      const direction = filter.order() === 'asc' ? 1 : -1;

      return books().toSorted((a, b) =>
        direction * a.title.localeCompare(b.title)
      );
    },
  })),
  withMethods((store, bookService = inject(BookService)) => ({
    updateQuery(query: string): void {
      // updating state using the 'pathState' function
      patchState(store, (state) => ({ filter: { ...state.filter, query } }))
    },
    updateOrder(order: 'asc' | 'desc'): void {
      patchState(store, (state) => ({ filter: { ...state.filter, order} }))
    },
    // 👇 Defining a method to load all books.
    async loadAll(): Promise<void> {
      patchState(store, { isLoading: true });

      const books = await bookService.getAll();
      patchState(store, { books, isLoading: false });
    }
      
  }))
);



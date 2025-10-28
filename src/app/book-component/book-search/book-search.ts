import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { BookSearchStore } from '../../books/book-search-store';

@Component({
  selector: 'app-book-search',
  imports: [JsonPipe],
  templateUrl: './book-search.html',
  styleUrl: './book-search.css',
  providers: [BookSearchStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookSearch {
  readonly store = inject(BookSearchStore);
}

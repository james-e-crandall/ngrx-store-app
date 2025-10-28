import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  private http = inject(HttpClient);

    bookList: Book[] = [
        {
        id: '1',
        title: '1',
        volumeInfo: {
          title: '1',
          authors: ['1','2']
        }
      }
    ];
  
    getAll(): Book[] {
      return this.bookList;
    }

    getAllFromApi(): Observable< Book[]> {
      return this.http.get<Book[]>('/books');
    }

}

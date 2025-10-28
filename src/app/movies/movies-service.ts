import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private http = inject(HttpClient);

  getAll(): Observable<any> {
    return this.http.get('/movies');
  }
}

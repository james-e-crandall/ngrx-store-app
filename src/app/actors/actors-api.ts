import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActorsApi {
  private http = inject(HttpClient);

  getAll() : Observable<any> { 
    return this.http.get('/actors');
  }
}

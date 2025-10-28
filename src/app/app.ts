import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { BookComponent } from './book-component/book-component';
import { LoginPageComponent } from './login-page-component/login-page-component';
import { MoviesPage } from './movies-page/movies-page';

@Component({
  selector: 'app-root',
  imports: [MyCounterComponent, BookComponent, LoginPageComponent, MoviesPage],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('ngrx-store-app');
}

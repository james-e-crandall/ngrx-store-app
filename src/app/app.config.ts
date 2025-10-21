import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';

import { counterReducer } from './counter.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { reduce } from 'rxjs';

import { bookReducer} from './state/book.reducer.js';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
        provideStore({
          count: counterReducer, // Register your reducers here
          // Add more state slices and their corresponding reducers as needed
          id : bookReducer,
        }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};

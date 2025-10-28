import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';

import { counterReducer } from './state/counter.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { bookReducer} from './books/book.reducer';

import { loginPageReducer } from './state/login-page.reducer';
import { reduce } from 'rxjs';
import { debugMetaReducers } from './state/debug-metareducer';
import { clearStateMetaReducers  } from './state/clear-state.metareducer';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore({
        count: counterReducer, // Register your reducers here
        // Add more state slices and their corresponding reducers as needed
        id: bookReducer,
        login: loginPageReducer,
    }, { metaReducers: [...debugMetaReducers, ...clearStateMetaReducers] }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects()
]
};

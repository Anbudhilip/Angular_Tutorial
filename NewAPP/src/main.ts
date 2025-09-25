import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { App } from './app/app';
import { routes } from './app/app.routes';

bootstrapApplication(App, {
  providers: [provideRouter(routes)]
})
.catch(err => console.error(err));
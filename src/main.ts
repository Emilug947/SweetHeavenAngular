import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withHashLocation } from '@angular/router';

// Corregido: Usamos 'App' en lugar de 'AppComponent' para la importación
import { App } from './app/app'; 
import { routes } from './app/app.routes'; 

bootstrapApplication(App, { // Usamos 'App' en lugar de 'AppComponent'
  providers: [
    // Se usa withHashLocation() para evitar el error 404 en GitHub Pages
    provideRouter(routes, withHashLocation())
  ]
}).catch(err => console.error(err));
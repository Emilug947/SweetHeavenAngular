import { provideRouter, withHashLocation } from '@angular/router'; // <-- Añadir 'withHashLocation'
import { routes } from './app/app.routes';
// ...

bootstrapApplication(AppComponent, {
  providers: [
    // Añade withHashLocation() aquí
    provideRouter(routes, withHashLocation()) // <-- ¡Esta es la línea clave!
    // ... otros providers
  ]
})
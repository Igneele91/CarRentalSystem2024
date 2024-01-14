import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // Stelle sicher, dass der Pfad zu deinem AppModule korrekt ist

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

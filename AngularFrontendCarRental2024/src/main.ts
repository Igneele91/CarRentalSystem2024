import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // Stelle sicher, dass der Pfad korrekt ist

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

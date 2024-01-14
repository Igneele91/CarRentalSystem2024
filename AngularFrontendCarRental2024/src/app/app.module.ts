import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component'; // Stelle sicher, dass der Pfad korrekt ist

@NgModule({
  declarations: [
    HomeComponent,
    // Füge hier deine anderen Komponenten hinzu, außer AppComponent
  ],
  imports: [
    BrowserModule,
    // Füge hier weitere benötigte Angular-Module hinzu
  ],
  providers: [],
  bootstrap: [] // Lass dies leer, da AppComponent als Standalone-Komponente verwendet wird
})
export class AppModule { }

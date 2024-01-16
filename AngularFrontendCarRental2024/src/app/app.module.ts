import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
import { CustomersComponent } from './customers/customers.component';
import { RentalsComponent } from './rentals/rentals.component';
import { routes } from './app.routes'; // Importiere deine Routen

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarsComponent,
    CustomersComponent,
    RentalsComponent,
    // Füge hier alle anderen Komponenten hinzu
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Hier werden deine Routen hinzugefügt
    // Füge hier weitere Module hinzu, falls nötig
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

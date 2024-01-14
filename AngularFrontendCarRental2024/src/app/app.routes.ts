import { Routes } from '@angular/router';
// Importiere deine Komponenten
import { HomeComponent } from './home/home.component';  // Pfad anpassen
import { CarsComponent } from './cars/cars.component';
import { CustomersComponent } from './customers/customers.component';
import { RentalsComponent } from './rentals/rentals.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // HomeComponent als Startseite
  { path: 'cars', component: CarsComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'rentals', component: RentalsComponent },
  { path: '**', redirectTo: '/' } // Weiterleitung auf die Startseite bei unbekannten Pfaden
];

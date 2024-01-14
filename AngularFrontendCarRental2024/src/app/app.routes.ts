import { Routes } from '@angular/router';
import { AppComponent } from './app.component'; // Der Pfad muss ggf. angepasst werden
import { CarsComponent } from './cars/cars.component';
import { CustomersComponent } from './customers/customers.component';
import { RentalsComponent } from './rentals/rentals.component';

export const routes: Routes = [
  { path: '', component: AppComponent }, // AppComponent als Startseite
  { path: 'cars', component: CarsComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'rentals', component: RentalsComponent },
  { path: '**', redirectTo: '/' } // Weiterleitung auf die Startseite bei unbekannten Pfaden
];

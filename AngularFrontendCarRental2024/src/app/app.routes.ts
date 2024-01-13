import { Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { CarsComponent } from './app/cars/cars.component';
import { CustomersComponent } from './app/customers/customers.component';
import { RentalsComponent } from './app/rentals/rentals.component';

export const routes: Routes = [
  { path: '', component: AppComponent }, // Verwende AppComponent als Startseite
  { path: 'cars', component: CarsComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'rentals', component: RentalsComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' } // Weiterleitung auf die Startseite bei unbekannten Pfaden
];

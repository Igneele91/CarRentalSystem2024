import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
import { CustomersComponent } from './customers/customers.component';
import { RentalsComponent } from './rentals/rentals.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'rentals', component: RentalsComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' } // Weiterleitung auf Home bei unbekannten Pfaden
];

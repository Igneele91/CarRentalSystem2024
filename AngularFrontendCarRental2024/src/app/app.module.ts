import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Importieren Sie HttpClientModule

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
import { CustomersComponent } from './customers/customers.component';
import { RentalsComponent } from './rentals/rentals.component';
import { CarListComponent } from './cars/car-list/car-list.component'; // Importieren Sie CarListComponent
import { CarSearchComponent } from './cars/car-search/car-search.component'; // Importieren Sie CarSearchComponent
import { RentCarComponent } from './rentals/rent-car/rent-car.component'; // Importieren Sie RentCarComponent
import { CarService } from './services/car.service'; // Importieren Sie CarService
import { routes } from './app.routes'; // Importiere deine Routen

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarsComponent,
    CustomersComponent,
    RentalsComponent,
    CarListComponent, // Deklarieren Sie CarListComponent
    CarSearchComponent, // Deklarieren Sie CarSearchComponent
    RentCarComponent, // Deklarieren Sie RentCarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule // Fügen Sie HttpClientModule zu den Imports hinzu
  ],
  providers: [CarService], // Fügen Sie CarService zu den Providern hinzu
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Importieren Sie FormsModule

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
import { CustomersComponent } from './customers/customers.component';
import { RentalsComponent } from './rentals/rentals.component';
import { CarListComponent } from './cars/car-list/car-list.component';
import { CarSearchComponent } from './cars/car-search/car-search.component';
import { RentCarComponent } from './rentals/rent-car/rent-car.component';
import { CarService } from './services/car.service';
import { routes } from './app.routes'; // Importiere deine Routen

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarsComponent,
    CustomersComponent,
    RentalsComponent,
    CarListComponent,
    CarSearchComponent,
    RentCarComponent,
    // Füge hier alle anderen Komponenten hinzu
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule // Fügen Sie FormsModule zu den Imports hinzu
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }

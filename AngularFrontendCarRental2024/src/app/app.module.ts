import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
// Importiere alle anderen Komponenten, die du hast
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { RentalsComponent } from './rentals/rentals.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarsComponent,
    CustomersComponent,
    RentalsComponent,
    // Liste hier alle anderen Komponenten, die du hast
  ],
  imports: [
    BrowserModule,
    // Füge hier weitere Angular-Module hinzu, die du benötigst
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

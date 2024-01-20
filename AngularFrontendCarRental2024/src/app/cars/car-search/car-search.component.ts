import { Component } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Car, SearchCriteria } from '../../models'; // Importieren Sie benötigte Modelle

@Component({
  selector: 'app-car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.css']
})
export class CarSearchComponent {
  searchCriteria: SearchCriteria; // Definieren Sie den Typ für searchCriteria

  constructor(private carService: CarService) { }

  onSearch(): void {
    this.carService.searchCars(this.searchCriteria).subscribe(cars => {
      // Verarbeiten Sie die Suchergebnisse
      console.log(cars); // Beispiel: Loggen der Ergebnisse
    });
  }
}

import { Component } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Car, SearchCriteria } from '../../models';


@Component({
  selector: 'app-car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.css']
})
export class CarSearchComponent {
  searchCriteria: SearchCriteria | undefined = undefined;

  constructor(private carService: CarService) { }

  onSearch(): void {
    if (this.searchCriteria) {
      this.carService.searchCars(this.searchCriteria).subscribe((cars: Car[]) => {
        // Verarbeite die Suchergebnisse
        console.log(cars);
      });
    } else {
      console.error('Suchkriterien sind nicht definiert.');
    }
  }
}
